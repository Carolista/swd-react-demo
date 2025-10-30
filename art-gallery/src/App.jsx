import { useState } from 'react';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import ArtworksPage from './components/pages/artworks/ArtworksPage';
import EventsPage from './components/pages/events/EventsPage';
import Footer from './components/layout/Footer';
import { mockArtworks } from '../src/test-data/mockArtworks.js';
import { mockEvents } from '../src/test-data/mockEvents.js';

// TODO #1a: Create Artwork class
// TODO #5a: Create Event class

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    // TODO #2: Add state variable for tracking loading state (true)
    // TODO #3a: Add state variable to store list of fetched artworks (null)
    // TODO #6a: Add state variable to store list of fetched events (null)

    // TODO #3b: Write async function to perform fetch of artworks
    //  Use try/catch/finally for error handling

    // TODO #6b: Write async function to perform fetch of events
    //  Use try/catch/finally for error handling

    // TODO #3c: Make sure artworks fetch function is called only once when component mounts
    // TODO #6c: Make sure events fetch function is called only once when component mounts

    // TODO #3d: Make sure loading state is changed once artworks is no longer null
    // TODO #6d: Make sure loading state is changed once events is no longer null

    // TODO #3e: Pass down fetched list of artworks and loading state to ArtworksPage
    //  and remove import of mockArtworks at top
    // TODO #6e: Pass down fetched list of artworks and loading state to EventsPage
    //  and remove import of mockEvents at top

    return (
        <div id="body-container">
            <Header setCurrentPage={setCurrentPage} />
            {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
            {currentPage === 'artworks' && <ArtworksPage artworks={mockArtworks} />}
            {currentPage === 'events' && <EventsPage events={mockEvents} />}
            <Footer />
        </div>
    );
}

export default App;
