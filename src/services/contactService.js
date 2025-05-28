import { apiService } from './api';
import { endpoints } from '../config/api';

export const contactService = {
  // Will work with Strapi's contact form
  async submitContact(data) {
    return apiService.post(endpoints.contact, {
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      }
    });
  }
};
