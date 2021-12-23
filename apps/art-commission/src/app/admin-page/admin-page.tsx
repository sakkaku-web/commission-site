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
  const [saved, setSaved] = useState(false);

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
    setSaved(false);
    await client.postCommissionMeta({
      commissionOpen,
    });
    setSaved(true);
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
          {saved && <div className="status">Saved</div>}
        </div>
      </form>
    </div>
  );
}

export default AdminPage;
