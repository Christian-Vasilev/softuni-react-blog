import axios from "axios";

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
    origin: true,
});

httpClient.interceptors.response.use(response => {
    return response;
}, ({response}) => {
    return response;
});

httpClient.defaults.headers.post['Content-Type'] = 'application/json';
httpClient.defaults.headers.common['Accept'] = 'application/json';

export default httpClient;