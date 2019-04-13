import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-beckend.herokuapp.com'
});

export default api;