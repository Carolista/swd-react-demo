const Select = ({ id, label, children, required, handleChange }) => {
    return (
        <>
            <label htmlFor={id}>
                {label}
                {required && '*'}
            </label>
            <select id={id} name={id} onChange={handleChange}>
                {children}
            </select>
        </>
    );
};

export default Select;
