const Card = ({ artwork }) => {

    // FIXME: some of the CSS classes for this are in artworks.css - need to separate concerns
    
	return (
		<div className="card artwork-card">
			<img className="card-image" src={artwork.details.getImageURL()} />
			<h5>{artwork.title}</h5>
			<p className="card-artist-text">
				{artwork.artist.getFullName()} ({artwork.details.yearCreated})
			</p>
		</div>
	);
};

export default Card;
