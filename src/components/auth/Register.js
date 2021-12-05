import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import authUser from "../../hooks/useAuth";

const Register = () => {
    const history = useHistory();

    const {
        register,
        watch,
        formState: { errors },
        handleSubmit
    } = useForm();

    const handleFormSubmit = (formData) => {
        formData.name = `${formData.first_name} ${formData.last_name}`

        authUser(formData, true)
            .then(() => {
                history.push('/');
            });
    }

    let { password } = watch();

    return (
        <section id="auth" className="pricing-area p-relative pt-120 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title center-align mb-60 text-center">
                            <h2>Register</h2>
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
                            <form onSubmit={handleSubmit((data) => handleFormSubmit(data))}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input className={`authenticate-form ${errors.first_name ? 'is-invalid' : ''}`}
                                            type="text"
                                            id="first-name"
                                            {...register('first_name', {
                                                required: 'The First Name field is required'
                                            })}
                                            placeholder="First Name *"
                                        />
                                        <div className="invalid-feedback">
                                            {errors.first_name?.message}
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input className={`authenticate-form ${errors.last_name ? 'is-invalid' : ''}`}
                                            type="text"
                                            {...register('last_name', {
                                                required: 'The Last Name field is required'
                                            })}
                                            placeholder="Last Name *"
                                        />
                                        <div className="invalid-feedback">
                                            {errors.last_name?.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className={`authenticate-form ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        {...register('email', {
                                            required: 'The Email field is required'
                                        })}
                                        placeholder="Email *"
                                    />
                                    <div className="invalid-feedback">
                                        {errors.email?.message}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className={`authenticate-form ${errors.password ? 'is-invalid' : ''}`}
                                        {...register('password', {
                                            required: 'The password field is required',
                                            minLength: {
                                                value: 6,
                                                message: "The minimal password length is 6 symbols"
                                            }
                                        })}
                                        placeholder="Password" />
                                    <div className="invalid-feedback">
                                        {errors.password?.message}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className={`authenticate-form ${errors.password_confirmation ? 'is-invalid' : ''}`}
                                        {...register('password_confirmation', {
                                            required: 'The Repeat Password is required',
                                            validate: value =>
                                                value === password || "The passwords do not match"
                                        })}
                                        placeholder="Repeat Password" />
                                    <div className="invalid-feedback">
                                        {errors.password_confirmation?.message}
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