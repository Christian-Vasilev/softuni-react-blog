import localStorage from "../../utils/localStorage";
import { useEffect, useState } from "react";
import { AuthContextProvider } from "../../contexts/AuthContext";
import { getUser } from "../../services/userService";
import { isObjectEmpty } from "../../utils/helper";

const UserHandler = ({ children }) => {
    let [user, setUser] = useState(localStorage.read('user'));
    let [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        if (isObjectEmpty(user)) {
            setIsLoggedIn(false);
            localStorage.remove('user');
        } else {
            localStorage.store('user', user);
            setIsLoggedIn(true);
        }
    }, [user]);

    useEffect(() => {
        getUser()
            .then(response => {
                setUser(!response.success ? {} : response.data);
            });
    }, []);

    return (
        <AuthContextProvider value={{ user, isLoggedIn, setUser }}>
            {children}
        </AuthContextProvider>
    );
}

export default UserHandler;