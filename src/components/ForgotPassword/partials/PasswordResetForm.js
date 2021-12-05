const PasswordResetForm = ({ registerInput, errors, watch }) => {
    const { password } = watch();

    return (
        <div className="form-row">
            <div className="form-group col-md-12">
                <input
                    {...registerInput('email', { required: true })}
                    placeholder="Email Address *"
                    className={`authenticate-form ${errors.email ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">
                    {errors.email?.message}
                </div>
            </div>
            <div className="form-group col-md-12">
                <input
                    {...registerInput('password', {
                        required: 'The field is required',
                        minLength: {
                            value: 6,
                            message: 'Minimum password length is 6 symbols'
                        }
                    })}
                    type="password"
                    placeholder="Password"
                    className={`authenticate-form ${errors.password && 'is-invalid'}`} />
                <div className="invalid-feedback">
                    {errors.password?.message}
                </div>
            </div>
            <div className="form-group col-md-12">
                <input
                    {...registerInput('password_confirmation', {
                        required: 'The field is required',
                        minLength: {
                            value: 6,
                            message: 'Minimum password length is 6 symbols'
                        },
                        validate: value =>
                            value === password || "The passwords do not match"
                    })}
                    type="password"
                    placeholder="Repeat Password"
                    className={`authenticate-form ${errors.password_confirmation ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">
                    {errors.password_confirmation?.message}
                </div>
            </div>
        </div>
    )
}

export default PasswordResetForm;
