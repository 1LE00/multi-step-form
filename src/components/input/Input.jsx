import './input.css';
import { forwardRef } from 'react';
const Input = forwardRef(({ type, name, id, placeholder, label, error, value, max, pattern, handleChange, handleBlur }, ref) => {

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };
    return (
        <>
            <label htmlFor={id} className='personal-label'>{label}</label>
            <input type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className={`personal-input w-100 ${error ? 'border-red' : ''}`}
                autoComplete="off"
                value={value}
                minLength={max}
                maxLength={max}
                pattern={pattern}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyPress}
                ref={ref} />
            <p className="error">{error}</p>
        </>
    )
})

export default Input