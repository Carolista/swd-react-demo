import { useEffect, useState } from 'react';
import Artwork from './classes/Artwork';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import ArtworksPage from './components/pages/artworks/ArtworksPage';
import EventsPage from './components/pages/events/EventsPage';
import Footer from './components/layout/Footer';
import Event from './classes/Event';
import AboutPage from './components/pages/AboutPage';
import LocationPage from './components/pages/LocationPage';

// TODO #1: Install react-router with npm

function App() {
    // TODO #6: Delete currentPage once no longer needed
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoading, setIsLoading] = useState(true);
    const [allArtworks, setAllArtworks] = useState(null);
    const [allEvents, setAllEvents] = useState(null);

    const fetchArtworks = async () => {
        let artworks = [];

        try {
            const response = await fetch(
                'https://docs.google.com/document/d/13dI59aaCy4Uk_IHntzzw5M2a0A0wBKpc6IR0snjZ5sQ/export?format=txt',
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `ERROR - Status ${response.status}`);
            } else {
                const data = await response.json();
                artworks = data.map((artwork) => {
                    let newArtwork = new Artwork(
                        artwork.id,
                        artwork.title,
                        artwork.artist,
                        artwork.category,
                        artwork.imageId,
                    );
                    return newArtwork;
                });
            }
        } catch (error) {
            console.error(error.message);
        } finally {
            setAllArtworks(artworks);
        }
    };

    const fetchEvents = async () => {
        let events = [];

        try {
            const response = await fetch(
                'https://docs.google.com/document/d/17tBzjrBity_10c3Yqab-8_Eu8_xo0PJfiAkwsF3ex_k/export?format=txt',
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `ERROR - Status ${response.status}`);
            } else {
                const data = await response.json();
                events = data.map((event) => {
                    let newEvent = new Event(
                        event.id,
                        event.date,
                        event.title,
                        event.subtitle,
                        event.description,
                        event.bio,
                        event.criteria,
                        event.ticketPrice,
                        event.imageId,
                    );
                    return newEvent;
                });
            }
        } catch (error) {
            console.error(error.message);
        } finally {
            setAllEvents(events);
        }
    };

    useEffect(() => {
        fetchArtworks();
        fetchEvents();
    }, []);

    useEffect(() => {
        if (isLoading && allArtworks !== null && allEvents !== null) {
            setIsLoading(false);
        }
    }, [isLoading, allArtworks, allEvents]);

    // TODO #3: Convert from using currentPage to using routing for existing pages
    // TODO #7: Add a default wildcard to routing options
    // TODO #8: Create ArtworkDetailsPage 
    // TODO #9: Add dynamic routing for ArtworkDetailsPage below

    return (
        <div id="body-container">
            <Header setCurrentPage={setCurrentPage} />
            {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'artworks' && (
                <ArtworksPage isLoading={isLoading} artworks={allArtworks} />
            )}
            {currentPage === 'events' && <EventsPage isLoading={isLoading} events={allEvents} />}
            {currentPage === 'location' && <LocationPage />}
            <Footer />
        </div>
    );
}

export default App;
