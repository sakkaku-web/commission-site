import { CommissionClient } from '@commission-site/commission-client';
import './admin-page.module.scss';
import { AuthService } from './auth-client';

const auth = new AuthService({
  clientId: '4bnj7dbnsiqal82efabc29j565',
  domain: 'kumi-arts',
  tokenKey: 'kumi-arts-login-token',
});

export interface AdminPageProps {
  client: CommissionClient;
}

export function AdminPage({ client }: AdminPageProps) {
  auth.handleAuthCallback();

  if (!auth.isAuthenticated()) {
    auth.login('admin');
  }

  return (
    <div>
      <h1>Welcome to AdminPage!</h1>
    </div>
  );
}

export default AdminPage;
