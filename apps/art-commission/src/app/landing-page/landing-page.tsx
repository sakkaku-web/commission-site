import { CommissionClient } from '@commission-site/commission-client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SocialIcon } from 'react-social-icons';
import ClosedStatus from '../closed-status/closed-status';
import ContactForm, { ContactFormValue } from '../contact-form/contact-form';
import Showcase from '../showcase/showcase';
import './landing-page.module.scss';

export interface LandingPageProps {
  client: CommissionClient;
}

export function LandingPage({ client }: LandingPageProps) {
  const { t } = useTranslation();
  const [commissionOpen, setCommissionOpen] = useState(true as boolean | null);
  const showClosed = !commissionOpen;

  useEffect(() => {
    client
      .getCommissionMeta()
      .then((meta) => setCommissionOpen(meta.commissionOpen))
      .catch(() => setCommissionOpen(null));
  });

  const sendContact = async (contact: ContactFormValue) => {
    await client.sendContactMessage(contact);
  };

  const socialMedia = [
    'https://twitter.com/kumi_yada',
    'https://www.pixiv.net/users/58480310',
    'https://www.instagram.com/kumi_yada93',
    'https://www.youtube.com/channel/UCGhrMdAkUHi_8nc7qz_nE5Q',
  ];

  return (
    <>
      <div className="row">
        <img
          src="https://placekitten.com/300/200"
          alt="profile"
          className="max-w-xs mx-auto"
        />
        <div className="text-center">
          <h1 className="uppercase">Kumi</h1>
          <div className="flex flex-row justify-center p-2 gap-2">
            {socialMedia.map((link) => (
              <SocialIcon
                style={{ width: ' 2.5em', height: '2.5em' }}
                url={link}
              />
            ))}
          </div>
          <p>{t('landing.description')}</p>

          <ClosedStatus show={showClosed} />
        </div>
      </div>

      <Showcase />

      <div className="row">
        <ClosedStatus show={showClosed} />
        <ContactForm onSubmit={sendContact} disabled={!commissionOpen} />
      </div>
    </>
  );
}

export default LandingPage;
