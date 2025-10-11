import { Link } from 'react-router';

const HomePage = () => {
	return (
		<main>
			<div className="main-content">
				<h1>Welcome!</h1>
				<p>
					View our <Link to="/artworks">collection</Link> of fine art by
					celebrated local artists.
				</p>
			</div>
			<img
				src="/images/gallery-home.jpeg"
				width="100%"
				alt="Main Entry of Midtown Art Gallery"
			/>
		</main>
	);
};

export default HomePage;
