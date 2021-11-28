import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import {
    Route,
    Redirect
} from 'react-router-dom';

const Authorized = ({ location, children, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                isLoggedIn 
                    ? children
                    : <Redirect to={{ pathname: "/", state: { from: location } }} />
            }
        />
    );
}

export default Authorized;