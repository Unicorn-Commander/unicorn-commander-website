import { apiService } from './api';
import { endpoints } from '../config/api';

export const portfolioService = {
  // Matches Strapi's project collection structure
  async getProjects(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = `${endpoints.portfolio}?${queryString}`;
    return apiService.get(url);
  },

  async getProject(id) {
    return apiService.get(`${endpoints.portfolio}/${id}`);
  }
};
