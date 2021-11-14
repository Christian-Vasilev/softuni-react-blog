import { useEffect, useState } from "react";
import { setUser, getUser } from "../../networking/auth";

const Login = () => {
    const [email, setEmail] = useState({
        error: false,
        message: '',
        value: ''
    });

    const [password, setPassword] = useState({
        error: false,
        message: '',
        value: ''
    });

    const [responseErrorMessage, setResponseErrorMessage] = useState('');

    useEffect(() => {
        getUser();
    }, []);

    const handleEmailChange = (e) => {
        const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const value = e.target.value.trim();
        let message = '';
        let error = false;

        if (!emailRegexp.test(value)) {
            error = true;
            message = 'Invalid email address';
        }

        setEmail({
            error,
            message,
            value
        })
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        let message = '';
        let error = false;

        if (value.length < 6) {
            error = true;
            message = 'Password must be atleast 6 symbols';
        }

        setPassword({
            error,
            message,
            value
        });
    }

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();

        setUser(email.value, password.value);
    }

    return (
        <div className="col-lg-6 col-md-6 offset-lg-3">
            <div className={`alert alert-danger ${responseErrorMessage.length != 0 ? '' : 'd-none'}`}>
                SUCCESS LOGIN
            </div>
            <div className="s-single-services">
                <div className="text-center w-100">
                    <div className="forms-icon">
                        <i className="fa fa-key"></i>
                    </div>
                </div>
                <form name="register-form" onSubmit={handleLoginFormSubmit} method="post">
                    <div className="form-group">
                        <input type="email"
                            className={`authenticate-form ${email.error ? 'is-invalid' : ''}`}
                            name="email"
                            onBlur={handleEmailChange}
                            placeholder="Email *" />
                        <div className="invalid-feedback">
                            {email.message}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className={`authenticate-form ${password.error ? 'is-invalid' : ''}`}
                            name="password"
                            onBlur={handlePasswordChange}
                            placeholder="Password *" />
                        <div className="invalid-feedback">
                            {password.message}
                        </div>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" id="remember-me" />
                        <label className="form-check-label">
                            Запомни ме
                        </label>
                    </div>
                    <div className="form-check form-check-inline float-right">
                        <a href="#" className="forgotpassword">
                            Забравена парола?
                        </a>
                    </div>
                    <div className="form-group row pt-30">
                        <div className="col-lg-6 col-md-6">
                            <div className="pricing-btn">
                                <button type="submit" className="w-100 btn">Login</button>
                            </div>
                            <span>Нямаш профил? <a href="{{ route('register') }}" className="forgotpassword">Регистрирай се</a></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Login;