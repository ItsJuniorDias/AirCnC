import axios from 'axios';

const api = axios.create({
    baseURL: 'http://169.254.39.3:3333',
});

export default api;