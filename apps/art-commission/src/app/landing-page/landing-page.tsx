import { CommissionClient } from '@commission-site/commission-client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SocialIcon } from 'react-social-icons';
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
        <div className="flex flex-row justify-center p-2 gap-2">
          <SocialIcon
            style={{width: '2.5em', height: '2.5em'}}
            url="https://twitter.com/kumi_yada"
          />
          <SocialIcon
            style={{width: '2.5em', height: '2.5em'}}
            url="https://www.youtube.com/channel/UCGhrMdAkUHi_8nc7qz_nE5Q"
          />
        </div>
        <p>{t('landing.description')}</p>
        <div className="status important">
          {!commissionOpen && t('landing.closed')}
        </div>
      </div>

      <ContactForm onSubmit={sendContact} disabled={!commissionOpen} />
    </>
  );
}

export default LandingPage;
