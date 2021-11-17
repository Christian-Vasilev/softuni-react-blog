import {
    Link
} from 'react-router-dom';

const HeroButton = () => {
    return (
        <div className="col-xl-4 col-lg-4 d-none d-lg-block">
            <div className="right-menu">
                <ul>
                    <li>
                        <Link to="/register" className="top-btn">Регистрация</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeroButton;