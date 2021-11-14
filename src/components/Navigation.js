import NavigationItem from "./NavigationItem";

const Navigation = () => {
    return (
        <div className="col-xl-6 col-lg-6">
            <div className="main-menu text-left pl-15">
                <nav id="mobile-menu">
                    <ul>
                        <NavigationItem name="Home" href="/" />
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;