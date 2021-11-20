import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import {
    Route,
    Redirect
} from 'react-router-dom';

const Authorized = ({ location, children, ...rest }) => {
    const { user } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                !user 
                    ? children
                    : <Redirect to={{ pathname: "/", state: { from: location } }} />
            }
        />
    );
}

export default Authorized;