import { useNavigate, useParams } from 'react-router';
import ErrorPage from '../ErrorPage';
import GoBack from '../../common/GoBack';
import Spacer from '../../common/Spacer';
import LoadingPage from '../LoadingPage';

const ArtworkDetailsPage = ({ isLoading, artworks, artworksError }) => {
    const { id } = useParams();

    const navigate = useNavigate();

    const handleGoToHomePage = () => {
        navigate('/');
    };

    const handleGoToArtworksPage = () => {
        navigate('/artworks');
    };

    if (isLoading) {
        return <LoadingPage dataName="artwork" />;
    } else if (artworksError) {
        return (
            <ErrorPage>
                <p>{artworksError}</p>
                <Spacer marginY="20px" />
                <GoBack text={'Return Home'} handleClick={handleGoToHomePage} />
            </ErrorPage>
        );
    } else {
        const artwork = artworks.find((artwork) => String(artwork.id) === id);

        if (!artwork) {
            return (
                <ErrorPage>
                    <p>Sorry, that artwork does not exist!</p>
                    <Spacer marginY="20px" />
                    <GoBack text={'View All Artworks'} handleClick={handleGoToArtworksPage} />
                </ErrorPage>
            );
        } else {
            return (
                <main className="main-content">
                    <GoBack text={'View All Artworks'} handleClick={handleGoToArtworksPage} />
                    <h1 className="artwork-details-heading">Artwork Details</h1>
                    <div className="artwork-details-container">
                        <h3 className="artwork-details-title">{artwork.title}</h3>
                        <div>
                            <strong>Artist: </strong>
                            {artwork.artist}
                        </div>
                        {artwork.category && (
                            <div>
                                <strong>Category: </strong>
                                {artwork.category}
                            </div>
                        )}
                        <Spacer marginY="10px" />
                        <div>
                            <img
                                className="artwork-card-image"
                                src={artwork.getImageURL()}
                                alt={`Image of ${artwork.title} by ${artwork.artist}`}
                            />
                        </div>
                    </div>
                </main>
            );
        }
    }
};

export default ArtworkDetailsPage;
