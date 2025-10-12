import Card from '../../common/Card';
import Spacer from '../../common/Spacer';

const ArtworkCard = ({ artwork }) => {
	return (
		<Card clickable={true}>
			<img className="artwork-card-image" src={artwork.getImageURL()} />
			<p className="artwork-card-title">{artwork.title}</p>
			<p className="artwork-card-artist">{artwork.artist}</p>
			<Spacer marginY="10px" />
		</Card>
	);
};

export default ArtworkCard;
