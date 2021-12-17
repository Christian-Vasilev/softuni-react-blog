import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { login } from "../../services/userService";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { displayNotification } from "../../utils/helper";

const Login = () => {
    const history = useHistory();
    const { setUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleLoginFormSubmit = (formData) => {
        login({ ...formData })
            .then(response => {
                if (!response.success) {
                    displayNotification(response.message);

                    return;
                }

                setUser(response.data);
                displayNotification(response.message);
                setTimeout(() => {
                    history.push('/');
                }, 1000);
            });
    }

    return (
        <section id="auth" className="pricing-area p-relative pt-120 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title center-align mb-60 text-center">
                            <h2>Login</h2>
                            <img src="img/bg/circle-line.png" alt="circle" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 offset-lg-3">
                        <div className="s-single-services">
                            <div className="text-center w-100">
                                <div className="forms-icon">
                                    <i className="fa fa-key"></i>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit((data) => handleLoginFormSubmit(data))}>
                                <div className="form-group">
                                    <input type="email"
                                        {...register('email', {
                                            required: 'The Email field is required'
                                        })}
                                        className={`authenticate-form ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="Email *" />
                                    <div className="invalid-feedback">
                                        {errors.email?.message}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className={`authenticate-form ${errors.password ? 'is-invalid' : ''}`}
                                        {...register('password', {
                                            required: 'The Password field is required'
                                        })}
                                        placeholder="Password *" />
                                    <div className="invalid-feedback">
                                        {errors.password?.message}
                                    </div>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="checkbox"
                                        {...register('remember')}
                                        className="form-check-input"
                                        id="remember" />
                                    <label className="form-check-label">
                                        Remember me
                                    </label>
                                </div>
                                <div className="form-check form-check-inline float-right">
                                    <Link to='/reset-password' className="forgotpassword">
                                        Forgotten password?
                                    </Link>
                                </div>
                                <div className="form-group row pt-30">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="pricing-btn pb-10">
                                            <button type="submit" className="w-100 btn">Login</button>
                                        </div>
                                        <span>Don't have a profile? <Link to='/register' className="forgotpassword">Register</Link></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;