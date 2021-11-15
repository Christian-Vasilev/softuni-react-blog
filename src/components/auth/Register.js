import { useState } from "react";

const Register = () => {
    const [firstName, setFirstName] = useState({
        error: false,
        message: '',
        value: ''
    });
    const [lastName, setLastName] = useState({
        error: false,
        message: '',
        value: ''
    });

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

    const [confirmPassword, setConfirmPassword] = useState({
        error: false,
        message: '',
        value: ''
    });

    // Handle controlled components
    const handleFirstNameChange = (e) => {
        const value = e.target.value.trim();
        let message = '';
        let error = false;

        if (value.length < 3) {
            error = true;
            message = 'First name is too short';
        }

        setFirstName({
            error,
            message,
            value
        });
    }

    const handleLastNameChange = (e) => {
        const value = e.target.value.trim();
        let message = '';
        let error = false;

        if (value.length < 3) {
            error = true;
            message = 'Last name is too short';
        }

        setLastName({
            error,
            message,
            value
        });
    }

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
        const value = e.target.value.trim();
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

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value.trim();
        let message = '';
        let error = false;

        if (value.length < 6) {
            error = true;
            message = 'Repeated password must be atleast 6 symbols';
        }

        console.log(password.value === value);
        if (!(password.value === value)) {
            error = true;
            message = 'Both passwords must match';

            setPassword({
                error,
                message,
                value
            });
        }

        setConfirmPassword({
            error,
            message,
            value
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section id="auth" className="pricing-area p-relative pt-120 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title center-align mb-60 text-center">
                            <h2>Регистрация</h2>
                            <img src="img/bg/circle-line.png" alt="circle" />
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-lg-6 col-md-6 offset-lg-3 pt-60 pt-md-0">
                        <div className="s-single-services text-center">
                            <div className="forms-icon">
                                <i className="fa fa-user-plus"></i>
                            </div>
                            <form name="register-form" onSubmit={handleFormSubmit} method="post">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input className={`authenticate-form ${firstName.error ? 'is-invalid' : ''}`}
                                            type="text"
                                            id="first-name"
                                            name="firstName"
                                            placeholder="First Name *"
                                            onBlur={handleFirstNameChange}
                                        />
                                        <div className="invalid-feedback">
                                            {firstName.message}
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input className={`authenticate-form ${lastName.error ? 'is-invalid' : ''}`}
                                            type="text"
                                            name="lastName"
                                            onBlur={handleLastNameChange}
                                            placeholder="Last Name *"
                                        />
                                        <div className="invalid-feedback">
                                            {lastName.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className={`authenticate-form ${email.error ? 'is-invalid' : ''}`}
                                        id="email"
                                        name="email"
                                        onBlur={handleEmailChange}
                                        placeholder="Email *"
                                    />
                                    <div className="invalid-feedback">
                                        {email.message}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className={`authenticate-form ${password.error ? 'is-invalid' : ''}`}
                                        name="password"
                                        onBlur={handlePasswordChange}
                                        placeholder="Password" />
                                    <div className="invalid-feedback">
                                        {password.message}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className={`authenticate-form ${confirmPassword.error ? 'is-invalid' : ''}`}
                                        name="password_confirmation"
                                        onBlur={handleConfirmPasswordChange}
                                        placeholder="Repeat Password" />
                                    <div className="invalid-feedback">
                                        {confirmPassword.message}
                                    </div>
                                </div>

                                <div className="pricing-btn pt-30">
                                    <button type="submit" className="btn">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;