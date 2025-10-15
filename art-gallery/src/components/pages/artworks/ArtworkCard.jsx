import Card from '../../common/Card';
import Spacer from '../../common/Spacer';

const ArtworkCard = ({ artwork }) => {
	return (
		<Card clickable={true}>
			<img className="artwork-card-image" src={artwork.getImageURL()} />
			<div className="artwork-card-text">
				<h5>{artwork.title}</h5>
				<h6>{artwork.artist}</h6>
			</div>
			<Spacer marginY="10px" />
		</Card>
	);
};

export default ArtworkCard;
