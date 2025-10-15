const Input = ({ id, label, type, value, required, handleChange }) => {
    // TODO: Update component to accept and place a ref

    return (
        <>
            <label htmlFor={id}>
                {label}
                {required && '*'}
            </label>
            <input id={id} type={type || 'text'} value={value} onChange={handleChange} />
        </>
    );
};

export default Input;
