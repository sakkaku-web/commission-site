import { CommissionClient } from '@commission-site/commission-client';
import { FormEvent, useEffect, useState } from 'react';
import { environment } from '../../environments/environment';
import './admin-page.module.scss';
import { AuthService } from './auth-client';

const auth = new AuthService({
  clientId: 'osd6kdf9ur58ohmcmvk1nh2jb',
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

  const [commissionOpen, setCommissionOpen] = useState(false);
  const [status, setStatus] = useState('');

  const client = new CommissionClient(
    environment.commisionApi,
    auth.getToken()
  );

  useEffect(() => {
    client.getCommissionMeta().then((meta) => {
      setCommissionOpen(meta.commissionOpen);
    });
  }, []);

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('');
    const response = await client.postCommissionMeta({
      commissionOpen,
    });
    if (response.status === 200) {
      setStatus('Saved');
    } else {
      setStatus(await response.json());
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitForm}>
        <div className="form-row inline">
          <input
            id="commissionOpen"
            type="checkbox"
            checked={commissionOpen}
            onChange={(e) => setCommissionOpen(e.target.checked)}
          />
          <label htmlFor="commissionOpen">Commission Open</label>
        </div>

        <div className="form-row inline">
          <button type="submit">Save</button>
          <div className="status">{status}</div>
        </div>
      </form>
    </div>
  );
}

export default AdminPage;
