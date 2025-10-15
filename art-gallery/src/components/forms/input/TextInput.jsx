const TextInput = ({ id, label, value, required, handleChange }) => {
	return (
		<>
			<label htmlFor={id}>{label}{required && "*"}</label>
			<input id={id} type="text" value={value} onChange={handleChange} />
		</>
	);
};

export default TextInput;
