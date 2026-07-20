import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Artwork from './classes/Artwork';
import Event from './classes/Event';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ArtworksPage from './components/pages/artworks/ArtworksPage';
import ArtworkDetailsPage from './components/pages/artworks/ArtworkDetailsPage';
import EventsPage from './components/pages/events/EventsPage';
import LocationPage from './components/pages/LocationPage';
import Footer from './components/layout/Footer';

const parseJSONText = (rawText, dataName) => {
    try {
        return JSON.parse(rawText);
    } catch {
        throw new Error(
            `Unable to parse ${dataName}. Google Docs export uses plain text and should contain valid JSON.`,
        );
    }
};

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [allArtworks, setAllArtworks] = useState(null);
    const [allEvents, setAllEvents] = useState(null);
    const [artworksError, setArtworksError] = useState(null);
    const [eventsError, setEventsError] = useState(null);

    useEffect(() => {
        const fetchArtworks = async () => {
            let artworks = [];

            try {
                const response = await fetch(
                    'https://docs.google.com/document/d/13dI59aaCy4Uk_IHntzzw5M2a0A0wBKpc6IR0snjZ5sQ/export?format=txt',
                );

                if (!response.ok) {
                    throw new Error(`Unable to retrieve artworks (status ${response.status}).`);
                }

                // Google Docs export returns plain text; this text is expected to be JSON.
                const rawText = await response.text();
                const data = parseJSONText(rawText, 'artworks');
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
                setArtworksError(null);
            } catch (error) {
                console.error(error.message);
                setArtworksError(error.message);
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
                    throw new Error(`Unable to retrieve events (status ${response.status}).`);
                }

                // Google Docs export returns plain text; this text is expected to be JSON.
                const rawText = await response.text();
                const data = parseJSONText(rawText, 'events');
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
                setEventsError(null);
            } catch (error) {
                console.error(error.message);
                setEventsError(error.message);
            } finally {
                setAllEvents(events);
            }
        };

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
                    element={
                        <ArtworksPage
                            isLoading={isLoading}
                            artworks={allArtworks}
                            artworksError={artworksError}
                        />
                    }
                />
                <Route
                    path="/artworks/details/:id"
                    element={
                        <ArtworkDetailsPage
                            isLoading={isLoading}
                            artworks={allArtworks}
                            artworksError={artworksError}
                        />
                    }
                />
                <Route
                    path="/events"
                    element={
                        <EventsPage
                            isLoading={isLoading}
                            events={allEvents}
                            eventsError={eventsError}
                        />
                    }
                />
                <Route path="/location" element={<LocationPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
