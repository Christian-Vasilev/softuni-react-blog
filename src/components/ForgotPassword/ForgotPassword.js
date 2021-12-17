import { useLocation } from "react-router-dom";
import EmailForm from "./partials/EmailForm";
import PasswordResetForm from "./partials/PasswordResetForm";
import { useForm } from 'react-hook-form'
import { passwordEmail, passwordReset } from "../../services/userService";
import { displayNotification } from "../../utils/helper";

const ForgotPassword = () => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        deepNest: {
            email: '',
            password: '',
            password_confirmation: '',
        }
    });

    const searchParams = new URLSearchParams(useLocation().search)
    const token = searchParams.get('token');

    const handleFormSubmit = (formData) => {
        formData.token = token;
        const request = ('password' in formData)
            ? passwordReset(formData)
            : passwordEmail(formData);

        request.then(response => {
            displayNotification(response.message);
            if (response.success) {
                reset();
            }
        });
    }

    return (
        <section id="auth" className="pricing-area p-relative pt-120 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title center-align mb-60 text-center">
                            <h2>Password Reset</h2>
                            <img src="img/bg/circle-line.png" alt="circle" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 offset-lg-3 pt-60 pt-md-0">
                        <div className="s-single-services text-center">
                            <div className="forms-icon">
                                <i className="fa fa-unlock-alt"></i>
                            </div>
                            <form onSubmit={handleSubmit((data) => handleFormSubmit(data))}>
                                {token
                                    ? <PasswordResetForm registerInput={register} errors={errors} watch={watch} />
                                    : <EmailForm registerInput={register} errors={errors} watch={watch} />}
                                <div className="pricing-btn pt-30">
                                    <button type="submit" className="btn">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ForgotPassword;