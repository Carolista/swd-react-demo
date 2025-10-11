const GoBack = ({ text, handleClick }) => {
	return (
		<span className="link-like" onClick={handleClick}>
			<i className="fa-solid fa-circle-arrow-left icon-space-right"></i>
			{text}
		</span>
	);
};

export default GoBack;
