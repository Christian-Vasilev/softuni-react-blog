import siteLogo from './resources/logo.png';

const Logo = () => {
    return (
        <div className="col-xl-2 col-lg-2">
            <div className="logo2">
                <a href="index.html"><img src={siteLogo} alt="logo" /></a>
            </div>
        </div>
    );
}

export default Logo;