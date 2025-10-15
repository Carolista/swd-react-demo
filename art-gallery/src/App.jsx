import { useState } from 'react';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import ArtworksPage from './components/pages/artworks/ArtworksPage';
import EventsPage from './components/pages/events/EventsPage';
import Footer from './components/layout/Footer';
import { mockArtworks } from '../src/test-data/mockArtworks.js';
import { mockEvents } from '../src/test-data/mockEvents.js';

// TODO: Create IconWithLabel, Loading, and Spinner components

function App() {
    // State variables that React will pay attention to for re-rendering
    const [currentPage, setCurrentPage] = useState('home');

    // TODO: Add state variables for tracking loading state (true)
    //  and lists of artworks and events (null)

    // TODO: Create classes for Artwork and Event

    // TODO: Write async functions to perform fetches
    //  Use try/catch/finally for error handling

    // TODO: Make sure both fetch functions are called once when component mounts

    // TODO: Make sure loading state is changed once artworks and
    //  events lists are no longer null

    // TODO: Pass down new lists of artworks and events to their respective pages
    //  and remove imports of test data at top

    // TODO: Pass down loading state to ArtworksPage and EventsPage

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
