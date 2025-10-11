import Card from '../../common/Card';

const ArtworkCard = ({ artwork }) => {
	return (
		<Card>
			<img className="artwork-card-image" src={artwork.getImageURL()} />
			<h5>{artwork.title}</h5>
			<p className="artwork-card-artist-text">{artwork.artist}</p>
		</Card>
	);
};

export default ArtworkCard;
