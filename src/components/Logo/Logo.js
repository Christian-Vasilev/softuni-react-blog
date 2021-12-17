import { Link } from 'react-router-dom';
import siteLogo from './resources/logo.png';

const Logo = () => {
    return (
        <div className="col-xl-2 col-lg-2">
            <div className="logo2">
                <Link to="/"><img src={siteLogo} alt="logo" /></Link>
            </div>
        </div>
    );
}

export default Logo;