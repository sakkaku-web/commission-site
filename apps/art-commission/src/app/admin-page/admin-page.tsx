import { CommissionClient } from '@commission-site/commission-client';
import { environment } from '../../environments/environment';
import './admin-page.module.scss';
import { AuthService } from './auth-client';

const auth = new AuthService({
  clientId: '4bnj7dbnsiqal82efabc29j565',
  domain: 'kumi-arts',
  tokenKey: 'kumi-arts-login-token',
});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AdminPageProps {}

export function AdminPage(props: AdminPageProps) {
  auth.handleAuthCallback();

  if (!auth.isAuthenticated()) {
    auth.login('admin');
  }

  const client = new CommissionClient(
    environment.commisionApi,
    auth.getToken()
  );

  return (
    <div>
      <h1>Welcome to AdminPage!</h1>
    </div>
  );
}

export default AdminPage;
