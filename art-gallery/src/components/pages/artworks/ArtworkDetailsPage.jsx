import { useNavigate, useParams } from 'react-router';
import ErrorPage from '../ErrorPage';
import Loading from '../LoadingPage';
import GoBack from '../../common/GoBack';
import Spacer from '../../common/Spacer';

const ArtworkDetailsPage = ({ isLoading, artworks }) => {
    const { id } = useParams();

    const navigate = useNavigate();

    const handleGoToArtworksPage = () => {
        navigate('/artworks');
    };

    if (isLoading) {
        return <Loading dataName="artwork" />;
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
                    <h2>DETAILS</h2>
                    <div className="artwork-details-container">
                        <div>
                            <h5>{artwork.title}</h5>
                        </div>
                        <div>
                            <strong>Artist: </strong>
                            {artwork.artist}
                        </div>
                        <div>
                            {artwork.category && (
                                <>
                                    <strong>Category: </strong>
                                    {artwork.category}
                                </>
                            )}
                        </div>
                        <Spacer marginY="10px" />
                        <div>
                            <img className="artwork-card-image" src={artwork.getImageURL()} />
                        </div>
                    </div>
                </main>
            );
        }
    }
};

export default ArtworkDetailsPage;
