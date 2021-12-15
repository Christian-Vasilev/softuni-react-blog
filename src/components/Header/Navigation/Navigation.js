import { isObjectEmpty } from "../../../utils/helper";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = ({ user }) => {
    return (
        <div className="col-xl-6 col-lg-6">
            <div className="main-menu text-left pl-15">
                <nav id="mobile-menu">
                    <ul>
                        <NavigationItem name="Home" href="/" />
                        {!isObjectEmpty(user)
                            ? (
                                <>
                                    <NavigationItem name="Profile" href="/profile" />
                                    <NavigationItem name="Create post" href="/post/create" />
                                </>
                            ) : (
                                <>
                                    <NavigationItem name="Login" href="/login" />
                                    <NavigationItem name="Register" href="/register" />
                                </>
                            )}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;