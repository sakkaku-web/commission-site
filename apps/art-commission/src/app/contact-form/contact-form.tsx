import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './contact-form.module.scss';

export interface ContactFormValue {
  name: string;
  email: string;
  message?: string;
}

export enum ContactStatus {
  SENT,
  ERROR,
}

export interface ContactFormProps {
  onSubmit?: (value: ContactFormValue) => Promise<void>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<ContactStatus | null>(null);

  const getStatusMessage = (status: ContactStatus | null) => {
    if (status == null) return '';

    if (status === ContactStatus.SENT) {
      return t('contact.status.sent');
    }

    return t('contact.status.error');
  };
  const statusMessage = getStatusMessage(status);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onSubmit) {
      try {
        await onSubmit({
          email,
          name,
          message,
        });
        setStatus(ContactStatus.SENT);
        resetForm();
      } catch (e) {
        setStatus(ContactStatus.ERROR);
      }
    }
  };

  return (
    <form className="form" onSubmit={(e) => submit(e)}>
      <div className="form-row">
        <label htmlFor="contact-name">{t('contact.name')} *</label>
        <input
          id="contact-name"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-email">{t('contact.email')} *</label>
        <input
          id="contact-email"
          type="text"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-message">{t('contact.message')}</label>
        <textarea
          id="contact-message"
          className="resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
        />
      </div>

      <div className="form-row">
        <div>
          <button type="submit">{t('button.submit')}</button>
        </div>
      </div>

      {statusMessage && <div className="form-row">{statusMessage}</div>}
    </form>
  );
}

export default ContactForm;
