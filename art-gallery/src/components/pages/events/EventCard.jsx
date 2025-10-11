import Card from "../../common/Card";

const EventCard = ({ event }) => {

    const getFormattedDate = () => {
        let lang = "en-US";
        let options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "UTC",
        }
        return event.date.toLocaleString(lang, options);
    }

    const getImageURL = () => {
		return 'https://i.ibb.co/' + event.imageId;
	}

	return (
		<Card>
			<img className="event-card-image" src={getImageURL()} />
			<p className="title-text">{event.title}</p>
            <p className="subtitle-text">{event.subtitle}</p>
			<p>{event.description}</p>
			{event.bio && <p className="">{event.bio}</p>}
            <p>{getFormattedDate()} | ${event.ticketPrice}.00</p>
            <p><em>{event.criteria}</em></p>
		</Card>
	);
};

export default EventCard;
