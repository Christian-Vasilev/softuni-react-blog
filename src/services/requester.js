import axios from "axios";

const apiVersion = '/api';
const POST = 'POST';
const GET = 'GET';
const PUT = 'PUT';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
    origin: true,
});

httpClient.interceptors.response.use(
    (response) => {
        return response.data
    },
    ({ response }) => {

        if (typeof response == 'undefined') {
            
            return {
                success: false,
                message: 'Unknown error on our backend',
            }
        }

        const { data } = response;

        return data;
    });

httpClient.defaults.headers.post['Content-Type'] = 'application/json';
httpClient.defaults.headers.common['Accept'] = 'application/json';

const request = (url, method, data = {}, excludeApiVersioning = false) => {
    if (!excludeApiVersioning) {
        url = apiVersion + url;
    }

    if (method !== POST && method !== GET) {
        if (data instanceof FormData) {
            data.append('_method', method);
        } else {
            data._method = method;
        }
    }

    switch (method) {
        case 'GET':
            return httpClient.get(url);
        case 'POST':
        case 'PUT':
        case 'PATCH':
        case 'DELETE':
            return httpClient.post(url, data);
        default:
            return httpClient.get(url);
    }
}

export { request, POST, PATCH, PUT, DELETE, GET };