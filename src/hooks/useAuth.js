import { csrfCookie, register, login } from "../services/userService";
import localStorage from "../utils/localStorage";

const authUser = async (credentials, registered = false) => {
    await csrfCookie('/sanctum/csrf-cookie');
    let response;

    if (registered) {
        response = await register(credentials);

        if (response.statusText === 'Created') {
            const { email, password } = credentials;
            credentials = { email, password };
        }
    }

    response = await login(credentials);

    if (response.status === 200) {
        const user = response.data.data;

        localStorage.store('user', user);
    }

    return response;
}


export default authUser
