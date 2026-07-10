import Card from '../../common/Card';
import Spacer from '../../common/Spacer';

const ArtworkCard = ({ artwork }) => {
    const getImageURL = () => {
        return 'https://i.ibb.co/' + artwork.imageId;
    };

    return (
        <Card clickable={true}>
            <img
                className="artwork-card-image"
                src={getImageURL()}
                alt={`Image of ${artwork.title} by ${artwork.artist}`}
            />
            <div className="artwork-card-text">
                <h3 className="artwork-card-title">{artwork.title}</h3>
                <h4 className="artwork-card-artist">{artwork.artist}</h4>
            </div>
            <Spacer marginY="10px" />
        </Card>
    );
};

export default ArtworkCard;
