import { CommissionContact } from '@commission-site/commission-shared';
export class CommissionClient {
  constructor(private baseUrl: string) {}

  async sendContactMessage(contact: CommissionContact) {
    return fetch(`${this.baseUrl}/contact`, {
      method: 'POST',
      body: JSON.stringify(contact),
    });
  }
}
