import httpClient from "../components/utils/httpClient";
import localStorage from "../components/utils/localStorage";
import { useState } from "react";

// const useAxios = (url, parsedData, requestType = 'post', requestOnLoad = false) => {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [hasError, setHasError] = useState(false);
//     const [errorMessages, setErrorMessages] = useState({});

//     const fetchData = async (xsrfToken) => {
//         const httpClient = axios.create({
//             baseURL: 'http://loclhost:8000'
//         });

//         httpClient.defaults.headers.common['']

//         try {
//             if (requestType == 'post') {
//                 const response = await axios.post(url, parsedData);
//             } else {
//                 const response = await axios.get(url);
//             }

//             setData(response.data);
//             setHasError(response.success);
//             setIsLoading(false);
//         } catch (error) {
//             setHasError(true);
//             setIsLoading(false);
//             setErrorMessages(error.errors)
//         }
//     }
// }

export const setUser = async (email, password) => {
    await httpClient.get('/sanctum/csrf-cookie');
    const response = await httpClient.post('/api/login', { email, password });

    if (response.statusText == 'OK' && response.status == 200) {
        const user = response.data.data;

        localStorage.store('user', user);
    }
}

export const getUser = async () => {
    const response = await httpClient.get('/api/user');
    
    if (response.statusText == 'OK' && response.status == 200) {
        const user = response.data;
        
        return user;
    }
    
    if (response.status == 401) {
        localStorage.remove('user');
    }

    return null;
}

export default { setUser, getUser }
