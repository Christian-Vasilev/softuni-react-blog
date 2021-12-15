
export const buildFormDataFromObj = (data, additionalParams = {}) => {
    const formData = new FormData();
    data = { ...data, ...additionalParams };

    Object.keys(data).map((key) => {
        formData.append(key, data[key]);
    });

    return formData;
}

export const isObjectEmpty = (object) => {
    return Object.keys(object).length === 0;
}