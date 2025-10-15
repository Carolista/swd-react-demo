import { useState } from 'react';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage';
import ArtworksPage from './components/ArtworksPage';
import Footer from './components/Footer.jsx';
import { mockArtworks } from '../src/test-data/mockArtworks.js';

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
