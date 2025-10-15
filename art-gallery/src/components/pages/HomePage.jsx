const HomePage = ({ setCurrentPage }) => {
    // TODO: replace handler usage with Link to collection

    return (
        <main>
            <div className="main-content">
                <h1>Welcome!</h1>
                <p>
                    View our{' '}
                    <span className="link-like" onClick={() => setCurrentPage('artworks')}>
                        collection
                    </span>{' '}
                    of fine art by celebrated local artists.
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
