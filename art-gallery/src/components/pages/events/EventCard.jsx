import { useState } from 'react';
import Card from '../../common/Card';
import EventRegistrationForm from './EventRegistrationForm';
import Button from '../../forms/input/Button';
import Spacer from '../../common/Spacer';

const EventCard = ({ event }) => {
	const [openForm, setOpenForm] = useState(false);

	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};

	return (
		<Card>
			<img className="event-card-image" src={event.getImageURL()} />
			<div>
				<p className="title-text">{event.title}</p>
				<p className="subtitle-text">{event.subtitle}</p>
				<p>{event.description}</p>
			</div>
			{event.bio && (
				<div>
					<p className="bio-subheader">Artist Bio</p>
					<p>{event.bio}</p>
				</div>
			)}
			<div className="date-time-price">
				{event.getFormattedDate()}
				<Spacer marginX="10px" character="|" />
				{event.getTicketPrice()}
			</div>
			<div className="criteria">{event.criteria}</div>
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
