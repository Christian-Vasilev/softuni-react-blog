import localStorage from "../utils/localStorage";
import httpClient from "../utils/httpClient";
import { useEffect, useState } from "react";
import { AuthContextProvider } from "../contexts/AuthContext";

const UserHandler = ({ children }) => {
    let [user, setUser] = useState(localStorage.read('user'));

    useEffect(() => {
        httpClient.get('/api/user')
        .then(response => {
            if (response.status == 200) {
                localStorage.store('user', response.data);
                setUser(response.data);
            }

            if (response.status == 401) {
                localStorage.remove('user');
                setUser({});
            }
        });
    }, []);

    return (
        <AuthContextProvider value={{user}}>
            {children}
        </AuthContextProvider>
    );
}

export default UserHandler;