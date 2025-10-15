import ArtworkCard from './ArtworkCard';

// TODO: Receive isLoading as a prop from App.jsx

const ArtworksPage = ({ artworks }) => {
    // TODO: Add logic to display Loading component if data is not yet available

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
};

export default ArtworksPage;
