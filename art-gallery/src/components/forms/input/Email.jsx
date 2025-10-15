const Email = ({ id, label, value, required, handleChange }) => {
	return (
		<>
			<label htmlFor={id}>{label}{required && "*"}</label>
			<input id={id} type="email" value={value} onChange={handleChange} />
		</>
	);
};

export default Email;
