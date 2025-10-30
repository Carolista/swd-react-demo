import LoadingPage from '../LoadingPage';
import ArtworkCard from './ArtworkCard';

// TODO #10: Link ArtworkCard to ArtworkDetailsPage for that artwork 
//  and move key attribute

const ArtworksPage = ({ isLoading, artworks }) => {
    if (isLoading) {
        return <LoadingPage dataName="artworks" />;
    } else {
        let artworksJSX = [...artworks].map((artwork) => {
            return <ArtworkCard key={artwork.id} artwork={artwork} />;
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
