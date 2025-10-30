import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ArtworkCard from './components/ArtworkCard.jsx';
import { mockArtworks } from '../src/test-data/mockArtworks.js';

// TODO #1: Create new components, HomePage and ArtworksPage

// TODO #2: Move the artworksJSX code along with the entire <main> section 
//  below to ArtworksPage and render it there instead. Make sure ArtworkCard
//  is imported in ArtworksPage instead of here. 
//  Also, instead of accessing the artworks data directly in the ArtworksPage
//  component, continue to import it here and pass the data down as a prop.

function App() {
    // TODO #4: Add a state variable that will control which page is displaying.

    // TODO #3: Place an instance of HomePage and ArtworksPage where <main>
    //  was before in the JSX returned below.

    // TODO #5: Use the state variable with conditional rendering to display either
    //  the home page or artworks page

    // TODO #6: Pass the setter for the state variable to Header and HomePage so the
    //  use can switch pages when interacting with child components

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
