const Email = ({ id, label, value, handleChange }) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} type="email" value={value} onChange={handleChange} />
		</>
	);
};

export default Email;
