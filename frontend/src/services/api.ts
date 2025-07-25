import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Your backend URL

const api = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to include the auth token in headers
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// --- Auth Service ---
export const loginUser = (data: any) => api.post('/auth/login', data);
export const signupUser = (data: any) => api.post('/auth/signup', data);


// --- Ornament Service ---
export const fetchOrnaments = () => api.get('/ornaments');
export const fetchOrnamentById = (id: string) => api.get(`/ornaments/${id}`);


// --- Category Service ---
export const fetchCategories = () => api.get('/categories');

export default api;

    