import { useState } from 'react';
import Header from './components/layout/Header.jsx';
import HomePage from './components/pages/HomePage.jsx';
import ArtworksPage from './components/pages/artworks/ArtworksPage';
import EventsPage from './components/pages/events/EventsPage.jsx';
import Footer from './components/layout/Footer.jsx';
import { mockArtworks } from './test-data/mockArtworks.js';
import { mockEvents } from './test-data/mockEvents.js';

function App() {
    // Temporary pre-router navigation uses currentPage plus prop drilling
    // via setCurrentPage; this will be replaced by React Router in Part 5.
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
