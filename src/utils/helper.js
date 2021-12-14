
export const buildFormDataFromObj = (data, additionalParams = {}) => {
    const formData = new FormData();
    data = { ...data, ...additionalParams };

    Object.keys(data).map((key) => {
        formData.append(key, data[key]);
    });

    return formData;
}