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
}
