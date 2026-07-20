import { Link, useNavigate } from 'react-router';
import LoadingPage from '../LoadingPage';
import ErrorPage from '../ErrorPage';
import GoBack from '../../common/GoBack';
import Spacer from '../../common/Spacer';
import ArtworkCard from './ArtworkCard';

const ArtworksPage = ({ isLoading, artworks, artworksError }) => {
    const navigate = useNavigate();

    const handleGoToHomePage = () => {
        navigate('/');
    };

    if (isLoading) {
        return <LoadingPage dataName="artworks" />;
    } else if (artworksError) {
        return (
            <ErrorPage>
                <p>{artworksError}</p>
                <Spacer marginY="20px" />
                <GoBack text={'Return Home'} handleClick={handleGoToHomePage} />
            </ErrorPage>
        );
    } else {
        let artworksJSX = [...artworks].map((artwork) => {
            return (
                <li className="artwork-card-item" key={artwork.id}>
                    <Link className="card-link" to={'/artworks/details/' + artwork.id}>
                        <ArtworkCard artwork={artwork} />
                    </Link>
                </li>
            );
        });
        return (
            <main className="main-content">
                <h1>Artworks</h1>
                {artworks.length ? (
                    <ul className="artwork-card-container">{artworksJSX}</ul>
                ) : (
                    <p>
                        <em>We're sorry, there are no artworks to display at this time.</em>
                    </p>
                )}
            </main>
        );
    }
};

export default ArtworksPage;
