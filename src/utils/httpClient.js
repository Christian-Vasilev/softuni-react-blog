import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    origin: true,
});

httpClient.interceptors.response.use(response => {
    return response;
}, ({response}) => {
    return response;
});

httpClient.defaults.headers.post['Content-Type'] = 'application/json';
httpClient.defaults.headers.common['Accept'] = '*/*';

export default httpClient;