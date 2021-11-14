import {
    useLocation,
} from 'react-router-dom'
import Login from './Login';
import Register from './Register';

const Authenticate = (props) => {
    /*
        Resolve the component that should be rendered based on the URI
    */
    const isLoginRequested = () => {
        return props.location.pathname == '/login';
    }

    return (
        <section id="auth" className="pricing-area p-relative pt-120 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title center-align mb-60 text-center">
                            <h2>{ isLoginRequested() ? 'Login' : 'Register' }</h2>
                            <img src="img/bg/circle-line.png" alt="circle" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {isLoginRequested() ? <Login /> : <Register /> }
                </div>
            </div>
        </section>
    );
}


export default Authenticate;