import { useEffect, useState } from 'react';
import Artwork from './classes/Artwork';
import Event from './classes/Event';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import ArtworksPage from './components/pages/artworks/ArtworksPage';
import EventsPage from './components/pages/events/EventsPage';
import Footer from './components/layout/Footer';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoading, setIsLoading] = useState(true);
    const [allArtworks, setAllArtworks] = useState(null);
    const [allEvents, setAllEvents] = useState(null);

    // Async function will make call to fetch data and handle errors
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

    // Async function will make call to fetch data and handle errors
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

    // Empty dependency array ensures fetch functions will be called only once
    //  when component first mounts
    useEffect(() => {
        fetchArtworks();
        fetchEvents();
    }, []);

    // Dependency array contains state variables React will 'listen' to
    //  and will execute the anonymous function only when one of them changes value
    useEffect(() => {
        // Change loading state only if both artworks and events are not null,
        //  even if just empty arrays because of fetching errors
        if (isLoading && allArtworks !== null && allEvents !== null) {
            setIsLoading(false);
        }
    }, [isLoading, allArtworks, allEvents]);

    return (
        <div id="body-container">
            <Header setCurrentPage={setCurrentPage} />
            {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
            {currentPage === 'artworks' && (
                <ArtworksPage isLoading={isLoading} artworks={allArtworks} />
            )}
            {currentPage === 'events' && <EventsPage isLoading={isLoading} events={allEvents} />}
            <Footer />
        </div>
    );
}

export default App;
