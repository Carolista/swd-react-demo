const Input = ({ id, label, type, value, min, required, handleChange }) => {
    return (
        <>
            <label htmlFor={id}>
                {label}
                {required && '*'}
            </label>
            <input id={id} type={type || 'text'} value={value} min={min} onChange={handleChange} />
        </>
    );
};

export default Input;
