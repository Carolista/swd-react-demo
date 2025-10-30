import ArtworkCard from './ArtworkCard';

// TODO #4a: Receive isLoading as a prop from App.jsx

const ArtworksPage = ({ artworks }) => {
    // TODO #4b: Add logic to return LoadingPage if data is not yet available
    //  (Test visually by passing down an empty array for artworks in App.jsx 
    //  since routing is not yet in place.)

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
