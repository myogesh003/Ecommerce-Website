// frontend/src/services/api.js

import axios from 'axios';

// Create an Axios instance with a default base URL.
// The base URL can be set via an environment variable (REACT_APP_API_URL)
// or will default to 'http://localhost:5000' for local development.
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

/**
 * Helper function to set or remove the Authorization header.
 * This is useful for authenticating requests to protected endpoints.
 *
 * @param {string|null} token - JWT token. Pass null to remove the header.
 */
export const setAuthToken = (token) => {
  if (token) {
    // If a token exists, attach it to every request header.
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // If no token, remove the Authorization header.
    delete API.defaults.headers.common['Authorization'];
  }
};

export default API;
