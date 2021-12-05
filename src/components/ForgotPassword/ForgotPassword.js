import { useLocation } from "react-router-dom";
import EmailForm from "./partials/EmailForm";
import PasswordResetForm from "./partials/PasswordResetForm";
import { useForm } from 'react-hook-form'
import httpClient from "../../utils/httpClient";

const ForgotPassword = () => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({deepNest: {
        email: '',
        password: '',
        password_confirmation: '',
    }});

    const searchParams = new URLSearchParams(useLocation().search)
    const token = searchParams.get('token');

    const handleFormSubmit = (formData) => {
        formData.token = token;
        const endpoint = ('password' in formData)
            ? '/api/password/reset'
            : '/api/password/email';
        
        httpClient.post(endpoint, formData)
            .then(response => {
                if (response.statusText != 'OK') {
                    console.error(response.data.errors);
                } else {
                    reset()
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