import { CommissionClient } from '@commission-site/commission-client';
import { useTranslation } from 'react-i18next';
import ContactForm, { ContactFormValue } from '../contact-form/contact-form';
import './landing-page.module.scss';

/* eslint-disable-next-line */
export interface LandingPageProps {
  client: CommissionClient;
}

export function LandingPage({ client }: LandingPageProps) {
  const { t } = useTranslation();

  const sendContact = async (contact: ContactFormValue) => {
    client.sendContactMessage(contact);
  };

  return (
    <>
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
    </>
  );
}

export default LandingPage;
