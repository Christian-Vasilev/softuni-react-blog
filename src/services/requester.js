import axios from "axios";
import { edit } from "./postService";

const apiVersion = '/api';
const POST = 'POST';
const GET = 'GET';
const PUT = 'PUT';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

const httpClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    origin: true,
});

httpClient.interceptors.response.use(response => {
    return response;
}, ({ response }) => {
    return response;
});

httpClient.defaults.headers.post['Content-Type'] = 'application/json';
httpClient.defaults.headers.common['Accept'] = 'application/json';

const request = (url, method, data = {}) => {
    url = apiVersion + url;

    if (method !== POST && method !== GET) {
        if (data instanceof FormData) {
            data.append('_method', method);
        } else {
            data._method = method;
        }
    }

    switch (method) {
        case 'POST':
            return httpClient.post(url, data);
        case 'GET':
            return httpClient.get(url);
        case 'PUT':
            return httpClient.post(url, data);
        case 'PATCH':
            return httpClient.post(url, data);
        case 'DELETE':
            return httpClient.post(url, data);
    }
}

export { request, POST, PATCH, PUT, DELETE, GET };