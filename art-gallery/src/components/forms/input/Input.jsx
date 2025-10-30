const Input = ({ id, label, type, value, required, handleChange }) => {
    // TODO #8b: Refactor component to accept a ref as a prop
    // TODO #8c: Place the ref on the <input>

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
