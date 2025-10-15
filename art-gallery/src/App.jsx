import { useState } from 'react';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage';
import ArtworksPage from './components/ArtworksPage';
import Footer from './components/Footer.jsx';
import { mockArtworks } from '../src/test-data/mockArtworks.js';

// TODO: Restructure component files and split up CSS using colocation

// TODO: Create reusable components for FormItem, Input, InputErrorMessage, and Button
// TODO: Create forms.css and add CSS

// TODO: Add mock data for events to test-data
// TODO: Create EventCard with basic display of single event
// TODO: Create EventsPage to display cards for all events
// TODO: Add EventsPage to options below and on NavMenu
// TODO: Create EventRegistrationForm and add to EventCard with toggle
// TODO: Create events.css and add CSS and media queries

function App() {
    // State variables that React will pay attention to for re-rendering
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <div id="body-container">
            <Header setCurrentPage={setCurrentPage} />
            {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
            {currentPage === 'artworks' && <ArtworksPage artworks={mockArtworks} />}
            <Footer />
        </div>
    );
}

export default App;
