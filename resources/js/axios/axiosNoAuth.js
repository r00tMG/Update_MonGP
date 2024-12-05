import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://backend-mongp.mayaapps.site/api',
    //baseURL: 'http://localhost:8000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
export default apiInstance;
