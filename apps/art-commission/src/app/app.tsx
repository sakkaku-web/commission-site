import { useTranslation } from 'react-i18next';
import ContactForm, {
  ContactFormValue,
} from './contact-form/contact-form';
import { CommissionClient } from '@commission-site/commission-client';
import { environment } from '../environments/environment';

const client = new CommissionClient(environment.commisionApi);

export function App() {
  const { t } = useTranslation();

  const sendContact = async (contact: ContactFormValue) => {
    client.sendContactMessage(contact);
  };

  return (
    <div id="wrapper">
      <img
        src="https://placekitten.com/300/200"
        alt="profile"
        className="max-w-xs mx-auto"
      />
      <div className="text-center">
        <h1 className="uppercase">Kumi</h1>
        <p>{t('landing.description')}</p>
      </div>

      <ContactForm onSubmit={sendContact} />
    </div>
  );
}

export default App;
