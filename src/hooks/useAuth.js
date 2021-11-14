import httpClient from "../components/utils/httpClient";
import localStorage from "../components/utils/localStorage";

const authUser = async (email, password) => {
    await httpClient.get('/sanctum/csrf-cookie');
    const response = await httpClient.post('/api/login', { email, password });

    if (response.status == 200) {
        const user = response.data.data;

        localStorage.store('user', user);
    }
}


export default authUser
