export class AuthService {
  private token: string | null = null;

  constructor(private options: AuthOptions) {
    this.loadToken();
  }

  loadToken() {
    this.token = sessionStorage.getItem(this.options.tokenKey);
  }

  login(prefix = '') {
    const { clientId, domain } = this.options;
    const redirectUri = `${document.baseURI}${prefix}`;
    const url = `https://${domain}.auth.eu-central-1.amazoncognito.com/login?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=email+openid`;
    window.location.href = url;
  }

  handleAuthCallback() {
    const url = window.location.href;
    const index = url.indexOf('id_token');
    const queryParams = url.substring(index);
    const urlParams = new URLSearchParams(queryParams);

    const token = urlParams.get('id_token');
    const type = urlParams.get('token_type');

    if (type != null && token != null) {
      this.token = `${type} ${token}`;
      sessionStorage.setItem(this.options.tokenKey, this.token);
    }
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  getToken(): string | null {
    return this.token;
  }
}

export interface AuthOptions {
  domain: string;
  clientId: string;
  tokenKey: string;
}
