import Card from '../../common/Card';
import Spacer from '../../common/Spacer';

const ArtworkCard = ({ artwork }) => {
    return (
        <Card clickable={true}>
            <img
                className="artwork-card-image"
                src={artwork.getImageURL()}
                alt={`Image of ${artwork.title} by ${artwork.artist}`}
            />
            <div className="artwork-card-text">
                <h3 className="artwork-card-title">{artwork.title}</h3>
                <p className="artwork-card-artist">{artwork.artist}</p>
            </div>
            <Spacer marginY="10px" />
        </Card>
    );
};

export default ArtworkCard;
