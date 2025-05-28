const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

export const endpoints = {
  // Match Strapi's default API structure
  blog: `${API_URL}/api/blogs`,
  services: `${API_URL}/api/services`,
  portfolio: `${API_URL}/api/projects`,
  team: `${API_URL}/api/team-members`,
  contact: `${API_URL}/api/contact-submissions`
};

export const getImageUrl = (path) => {
  if (!path) return '';
  // Handle both local and Strapi URLs
  return path.startsWith('http') ? path : `${API_URL}${path}`;
};
