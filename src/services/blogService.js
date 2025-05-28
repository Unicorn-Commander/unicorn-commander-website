import { apiService } from './api';
import { endpoints } from '../config/api';

export const blogService = {
  // Matches Strapi's blog collection structure
  async getPosts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = `${endpoints.blog}?${queryString}`;
    return apiService.get(url);
  },

  async getPost(id) {
    return apiService.get(`${endpoints.blog}/${id}`);
  }
};
