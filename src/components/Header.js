import HeroButton from './HeroButton';
import Logo from './Logo';
import Navigation from './Navigation';

export default () => {
    return (
        <header className="header-area in-header">
            <div id="header-sticky" className="menu-area menu-area2">
                <div className="container">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <Logo />
                            <Navigation />
                            <HeroButton />
                            <div className="col-12">
                                <div className="mobile-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}