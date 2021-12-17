import {
    request,
    GET,
    POST
} from "./requester";

export const getUser = () => request('/user', GET);
export const csrfCookie = () => request('/sanctum/csrf-cookie', GET, {}, true);
export const register = (data) => request('/register', POST, data); 
export const login = (data) => request('/login', POST, data);
export const passwordReset = (data) => request('/password/reset', POST, data);
export const passwordEmail = (data) => request('/password/email', POST, data);