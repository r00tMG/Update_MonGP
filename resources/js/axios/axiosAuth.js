import axios from "axios";

const instance = axios.create({
    baseURL: 'https://backend-mongp.mayaapps.site/api',
    //baseURL: 'http://localhost:8000/api'

    //timeout: 10000
});
instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default instance;

