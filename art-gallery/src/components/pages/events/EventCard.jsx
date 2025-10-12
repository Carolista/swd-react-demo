import { useState } from 'react';
import Card from '../../common/Card';
import EventRegistrationForm from '../../forms/EventRegistrationForm';
import Button from '../../forms/input/Button';
import Spacer from '../../common/Spacer';

const EventCard = ({ event }) => {
	const [openForm, setOpenForm] = useState(false);

	const getImageURL = () => {
		return 'https://i.ibb.co/' + event.imageId;
	};

	const getFormattedDate = () => {
		let lang = 'en-US';
		let options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: 'UTC',
		};
		return new Date(event.date).toLocaleString(lang, options);
	};

	const getTicketPrice = () => {
		return event.ticketPrice ? `$${event.ticketPrice}.00` : 'Free';
	};

	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};

	return (
		<Card>
			<img className="event-card-image" src={getImageURL()} />
			<p className="title-text">{event.title}</p>
			<p className="subtitle-text">{event.subtitle}</p>
			<p>{event.description}</p>
			{event.bio && (
				<>
					<p className="bio-subheader">Artist Bio</p>
					<p>{event.bio}</p>
				</>
			)}
			<p className="date-time-price">
				{getFormattedDate()}
				<Spacer marginX="10px" character="|" />
				{getTicketPrice()}
			</p>
			<p className="criteria">{event.criteria}</p>
			{openForm ? (
				<EventRegistrationForm
					event={event}
					handleCloseForm={handleToggleForm}
				/>
			) : (
				<div className="register-button-container">
					<Button
						id={`register-button-event-${event.id}`}
						type="button"
						label="Register"
						handleClick={handleToggleForm}
					/>
				</div>
			)}
		</Card>
	);
};

export default EventCard;
