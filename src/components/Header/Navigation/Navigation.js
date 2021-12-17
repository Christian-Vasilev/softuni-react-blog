import { Link } from "react-router-dom";
import { isObjectEmpty } from "../../../utils/helper";

const Navigation = ({ user }) => {
    return (
        <div className="col-xl-6 col-lg-6">
            <div className="main-menu text-left pl-15">
                <nav id="mobile-menu">
                    <ul>
                        <li key={'home'}><Link to="/">Home</Link></li>
                        {!isObjectEmpty(user)
                            ? (
                                <>
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="/post/create">Create post</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/login">Login</Link> </li>
                                    <li><Link to="/register">Register</Link></li>
                                </>
                            )}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;