import { CommissionClient } from '@commission-site/commission-client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm, { ContactFormValue } from '../contact-form/contact-form';
import './landing-page.module.scss';

export interface LandingPageProps {
  client: CommissionClient;
}

export function LandingPage({ client }: LandingPageProps) {
  const { t } = useTranslation();
  const [commissionOpen, setCommissionOpen] = useState(true as boolean | null);

  useEffect(() => {
    client
      .getCommissionMeta()
      .then((meta) => setCommissionOpen(meta.commissionOpen))
      .catch(() => setCommissionOpen(null));
  });

  const sendContact = async (contact: ContactFormValue) => {
    await client.sendContactMessage(contact);
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
        <div className="status important">
          {!commissionOpen && t('landing.closed')}
        </div>
      </div>

      <ContactForm onSubmit={sendContact} />
    </>
  );
}

export default LandingPage;
