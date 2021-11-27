import './landing-page.module.scss';
import {} from 'gsap';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface LandingPageProps {}

export function LandingPage(props: LandingPageProps) {
  const { t } = useTranslation();

  return (
    <div>
      <img src="https://placekitten.com/300/200" alt="profile" />
      <p>{t('landing.description')}</p>
    </div>
  );
}

export default LandingPage;
