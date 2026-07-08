import { Link } from 'react-router';

const HomePage = () => {
    return (
        <main>
            <div className="main-content">
                <h1>Welcome!</h1>
                <p>
                    View our <Link to="/artworks">collection</Link> of fine art by celebrated local
                    artists.
                </p>
            </div>
            <figure className="hero-figure">
                <img
                    className="hero-image"
                    src="/images/gallery-home.jpeg"
                    alt="Main Entry of Midtown Art Gallery"
                />
            </figure>
        </main>
    );
};

export default HomePage;
