import { Link } from 'react-router';
import LoadingPage from '../LoadingPage';
import ArtworkCard from './ArtworkCard';

const ArtworksPage = ({ isLoading, artworks }) => {
    if (isLoading) {
        return <LoadingPage dataName="artworks" />;
    } else {
        let artworksJSX = [...artworks].map((artwork) => {
            return (
                <Link to={'/artworks/details/' + artwork.id} key={artwork.id}>
                    <ArtworkCard artwork={artwork} />
                </Link>
            );
        });
        return (
            <main className="main-content">
                <h1>Artworks</h1>
                {artworks.length ? (
                    <div className="artwork-card-container">{artworksJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no artworks to display at this time.</em>
                    </p>
                )}
            </main>
        );
    }
};

export default ArtworksPage;
