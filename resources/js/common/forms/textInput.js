import React from 'react';

let TextInput = ({ onChange, name, value, label, type, placeholder, validation }) => {
    return (
        <div className="form-group mb-4">
            {label && <label>{label}</label>}

            <input
                type={type || 'text'}
                name={name}
                value={value}
                className="form-control border-0 shadow form-control-lg"
                placeholder={placeholder}
                onChange={onChange}
            />

            {validation && (
            <span className="invalid-feedback" role="alert">
                <strong>{validation}</strong>
            </span>
            )}
        </div>
    );
}

export default TextInput;
