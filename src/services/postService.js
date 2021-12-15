import {
    request,
    GET,
    DELETE,
    PATCH,
    POST
} from "./requester";

export const getAll = () => request('/posts', GET);
export const destroy = (slug, data) => request(`/posts/${slug}`, DELETE, data)
export const create = (data) => request('/posts', POST, data);
export const edit = (slug, data) => request(`/posts/${slug}`, PATCH, data);
export const show = (slug) => request(`/posts/${slug}`, GET);
export const getAllByUser = () => request(`/profile`, GET);