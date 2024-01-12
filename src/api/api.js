// Install axios using: npm install axios
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const server_calls = {
  get: async () => {
    const response = await axios.get(`${API_BASE_URL}/dashboard`);
    return response.data;
  },
  create: async (data) => {
    const response = await axios.post(`${API_BASE_URL}/dashboard/cars`, data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await axios.put(`${API_BASE_URL}/dashboard/cars/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/dashboard/cars/${id}`);
    return response.data;
  },
};
