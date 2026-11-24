import GoBack from '../../common/GoBack';
import Spacer from '../../common/Spacer';
import ErrorPage from '../ErrorPage';
import LoadingPage from '../LoadingPage.jsx';
import EventCard from './EventCard.jsx';

const EventsPage = ({ events, setCurrentPage, isLoading, eventsError }) => {
    if (isLoading) {
        return <LoadingPage dataName="events" />;
    } else if (eventsError) {
        return (
            <ErrorPage>
                <p>{eventsError}</p>
                <Spacer marginY="20px" />
                <GoBack text={'Return Home'} handleClick={() => setCurrentPage('home')} />
            </ErrorPage>
        );
    } else {
        let eventsJSX = events.map((event) => {
            return <EventCard key={event.id} event={event} />;
        });
        return (
            <main className="main-content">
                <h1>Upcoming Events</h1>
                {events.length ? (
                    <div className="event-card-container">{eventsJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no events to display at this time.</em>
                    </p>
                )}
            </main>
        );
    }
};

export default EventsPage;
