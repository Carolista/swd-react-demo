import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ArtworkCard from './components/ArtworkCard.jsx';
import { mockArtworks } from '../src/test-data/mockArtworks.js';

function App() {
    let artworksJSX = [...mockArtworks].map((artwork) => {
        return <ArtworkCard key={artwork.id} artwork={artwork} />;
    });

    return (
        <div id="body-container">
            <Header />
            <main className="main-content">
                <h1>Artworks</h1>
                {mockArtworks.length ? (
                    <div className="artwork-card-container">{artworksJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no artworks to display at this time.</em>
                    </p>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default App;
