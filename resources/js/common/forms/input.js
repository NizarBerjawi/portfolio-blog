import React from 'react';

let TextInput = ({ onChange, label, type, placeholder, validation }) => {
    let changed = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className="form-group mb-4">
            <label>{label}</label>
            <input
                type={type}
                className="form-control border-0 shadow form-control-lg"
                placeholder={placeholder}
                onChange={changed}
            />

            {validation &&
            <span className="invalid-feedback" role="alert">
                <strong>{validation}</strong>
            </span>
            }
        </div>
    );
}

export default TextInput;
