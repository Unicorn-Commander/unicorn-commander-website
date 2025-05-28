const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Matches Strapi's response format
const formatResponse = (response) => {
  if (!response.data) return response;
  return {
    data: response.data,
    meta: response.meta || {}
  };
};

export const apiService = {
  async get(endpoint, options = {}) {
    try {
      const response = await fetch(endpoint, {
        ...defaultOptions,
        ...options,
        method: 'GET',
      });
      const data = await response.json();
      return formatResponse(data);
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  async post(endpoint, body, options = {}) {
    try {
      const response = await fetch(endpoint, {
        ...defaultOptions,
        ...options,
        method: 'POST',
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return formatResponse(data);
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
};
