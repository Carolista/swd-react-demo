import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Artwork from './classes/Artwork';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import ArtworksPage from './components/pages/artworks/ArtworksPage';
import ArtworkDetailsPage from './components/pages/artworks/ArtworkDetailsPage';
import AboutPage from './components/pages/AboutPage';
import EventsPage from './components/pages/events/EventsPage';
import LocationPage from './components/pages/LocationPage';
import Footer from './components/layout/Footer';
import Event from './classes/Event';

// TODO: resize all images, re-upload, and update values in local test data,
//  JSON on Google Drive, and eventually database
// TODO: add alt to images
// TODO: run through a11y checker

function App() {
    // State variables that React will pay attention to for re-rendering
    const [isLoading, setIsLoading] = useState(true);
    const [allArtworks, setAllArtworks] = useState(null);
    const [allEvents, setAllEvents] = useState(null);

    // Async function that makes call to fetch data and handles errors
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

    return (
        <div id="body-container">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                    path="/artworks"
                    element={<ArtworksPage isLoading={isLoading} artworks={allArtworks} />}
                />
                <Route
                    path="/artworks/details/:id"
                    element={<ArtworkDetailsPage isLoading={isLoading} artworks={allArtworks} />}
                />
                <Route
                    path="/events"
                    element={<EventsPage isLoading={isLoading} events={allEvents} />}
                />
                <Route path="/location" element={<LocationPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
