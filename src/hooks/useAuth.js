import httpClient from "../utils/httpClient";
import localStorage from "../utils/localStorage";

const authUser = async (credentials, register = false) => {
    await httpClient.get('/sanctum/csrf-cookie');
    let response;

    if (register) {
        response = await httpClient.post('/api/register', credentials);

        if (response.statusText === 'Created') {
            const { email, password } = credentials;
            credentials = { email, password };
        }
    }

    response = await httpClient.post('/api/login', credentials);

    if (response.status === 200) {
        const user = response.data.data;

        localStorage.store('user', user);
    }

    return response;
}


export default authUser
