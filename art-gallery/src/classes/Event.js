export default class Event {
	constructor(
		id,
		date,
		title,
		subtitle,
		description,
		bio,
		criteria,
		ticketPrice,
		imageId
	) {
		this.id = id;
		this.date = date;
		this.title = title;
		this.subtitle = subtitle;
		this.description = description;
		this.bio = bio;
		this.criteria = criteria;
		this.ticketPrice = ticketPrice;
		this.imageId = imageId;
	}

	getImageURL = () => {
		return 'https://i.ibb.co/' + this.imageId;
	};

	getFormattedDate = () => {
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
		return new Date(this.date).toLocaleString(lang, options);
	};

	getTicketPrice = () => {
		return this.ticketPrice ? `$${this.ticketPrice}.00` : 'Free';
	};
}
