import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import {
    Route,
    Redirect
} from 'react-router-dom';

const Authorized = ({ location, children, ...rest }) => {
    const { user, isPending } = useContext(AuthContext);
    const isNullUser = user === null;

    return (
        !isPending && (
            <Route
                {...rest}
                render={
                    ({ location }) =>
                    isNullUser 
                        ? children
                        : <Redirect to={{ pathname: "/", state: { from: location } }} />
                }
            />
        )
    );
}

export default Authorized;