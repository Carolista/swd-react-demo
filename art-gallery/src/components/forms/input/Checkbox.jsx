const Checkbox = ({ id, name, label, isChecked, handleChange }) => {
    return (
        <div className="checkbox-with-label">
            <input
                id={id}
                name={name}
                value={id}
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Checkbox;
