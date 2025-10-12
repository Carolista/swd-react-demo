const NumberInput = ({ id, label, value, handleChange }) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type="number"
				className="number"
				value={value}
				onChange={handleChange}
			/>
		</>
	);
};

export default NumberInput;
