const NumberInput = ({ id, label, value, required, handleChange }) => {
	return (
		<>
			<label htmlFor={id}>{label}{required && "*"}</label>
			<input id={id} type="number" value={value} onChange={handleChange} />
		</>
	);
};

export default NumberInput;
