import httpClient from "../utils/httpClient";
import localStorage from "../utils/localStorage";

const authUser = async (credentials) => {
    await httpClient.get('/sanctum/csrf-cookie');
    const response = await httpClient.post('/api/login', credentials);

    if (response.status === 200) {
        const user = response.data.data;

        localStorage.store('user', user);
    }

    return response;
}


export default authUser
