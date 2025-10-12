const Icon = ({ classes, label }) => {
	return (
		<div className="icon-with-label">
			<i className={classes}></i>
			{label}
		</div>
	);
};

export default Icon;
