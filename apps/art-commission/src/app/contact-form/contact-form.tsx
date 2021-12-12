import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './contact-form.module.scss';

export interface ContactFormValue {
  name: string;
  email: string;
  message?: string;
}

export interface ContactFormProps {
  onSubmit?: (value: ContactFormValue) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onSubmit) {
      onSubmit({
        email,
        name,
        message,
      });
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
    </form>
  );
}

export default ContactForm;
