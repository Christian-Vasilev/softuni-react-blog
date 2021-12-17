import { toast } from 'react-toastify';

export const buildFormDataFromObj = (data, additionalParams = {}) => {
    const formData = new FormData();
    data = { ...data, ...additionalParams };

    Object.keys(data).map((key) => {
        return formData.append(key, data[key]);
    });

    return formData;
}

export const isObjectEmpty = (object) => {
    if (!object) {
        return false;
    }

    return Object.keys(object).length === 0;
}

export const displayNotification = (message) => toast(message, {
    position: 'top-right',
    
    
});