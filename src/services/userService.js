import {
    request,
    GET,
    DELETE,
    PATCH,
    POST
} from "./requester";

export const getUser = () => request('/user', GET);
export const csrfCookie = () => request('/sanctum/csrf-cookie', GET, {}, true);
export const register = (data) => request('/register', POST, data); 
export const login = (data) => request('/login', POST, data);
export const passwordReset = () => request('/password/reset', GET);
export const passwordEmail = () => request('/password/email', GET);