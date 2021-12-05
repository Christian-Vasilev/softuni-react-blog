const EmailForm = ({ registerInput, errors}) => {
    return (
        <div className="form-row">
              <div className="form-group col-md-12">
                <input
                    {...registerInput('email', { 
                        required: 'The email field is required'
                    })}
                    placeholder="Email *"
                    type="email"
                    className={`authenticate-form ${errors.email ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">
                    {errors.email?.message}
                </div>
            </div>
        </div>
    )
}

export default EmailForm;
