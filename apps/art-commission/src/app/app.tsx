import { CommissionClient } from '@commission-site/commission-client';
import { environment } from '../environments/environment';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing-page/landing-page';
import AdminPage from './admin-page/admin-page';

const client = new CommissionClient(environment.commisionApi);

export function App() {
  return (
    <div id="wrapper">
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage client={client} />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
