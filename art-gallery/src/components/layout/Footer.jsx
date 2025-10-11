const Footer = () => {
	let thisYear = new Date().getFullYear();

	return (
		<footer>
			<div>&copy; {thisYear} Midtown Art Gallery</div>
			<div>
				3230 Washington Avenue &bull; Saint Louis, MO 63103 &bull; (314)
				555-1234 &bull; info@magstl.com
			</div>
		</footer>
	);
};

export default Footer;
