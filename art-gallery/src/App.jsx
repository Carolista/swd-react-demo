import { useState } from 'react';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import ArtworksPage from './components/pages/artworks/ArtworksPage';
import EventsPage from './components/pages/events/EventsPage';
import Footer from './components/layout/Footer';
import { mockArtworks } from '../src/test-data/mockArtworks.js';
import { mockEvents } from '../src/test-data/mockEvents.js';

function App() {
    // State variables that React will pay attention to for re-rendering
    const [currentPage, setCurrentPage] = useState('home');

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
