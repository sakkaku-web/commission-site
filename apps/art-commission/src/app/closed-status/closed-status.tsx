import { useTranslation } from 'react-i18next';
import './closed-status.module.scss';

/* eslint-disable-next-line */
export interface ClosedStatusProps {
  show: boolean;
}

export function ClosedStatus({ show }: ClosedStatusProps) {
  const { t } = useTranslation();

  return (
    <div className="status important text-center">
      {show && t('landing.closed')}
    </div>
  );
}

export default ClosedStatus;
