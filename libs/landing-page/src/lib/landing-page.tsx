import './landing-page.module.scss';
import {} from 'gsap';

/* eslint-disable-next-line */
export interface LandingPageProps {}

export function LandingPage(props: LandingPageProps) {
  return (
    <div>
      <img src="https://placekitten.com/300/200" alt="profile" />
    </div>
  );
}

export default LandingPage;
