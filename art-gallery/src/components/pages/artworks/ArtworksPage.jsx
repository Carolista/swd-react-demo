import GoBack from '../../common/GoBack';
import Spacer from '../../common/Spacer';
import ErrorPage from '../ErrorPage';
import LoadingPage from '../LoadingPage';
import ArtworkCard from './ArtworkCard';

const ArtworksPage = ({ artworks, setCurrentPage, isLoading, artworksError }) => {
    if (isLoading) {
        return <LoadingPage dataName="artworks" />;
    } else if (artworksError) {
        return (
            <ErrorPage>
                <p>{artworksError}</p>
                <Spacer marginY="20px" />
                <GoBack text={'Return Home'} handleClick={() => setCurrentPage('home')} />
            </ErrorPage>
        );
    } else {
        let artworksJSX = [...artworks].map((artwork) => {
            return <ArtworkCard key={artwork.id} artwork={artwork} />;
        });
        return (
            <main className="main-content">
                <h1>Artworks</h1>
                {artworks.length ? (
                    <div className="artwork-card-container">{artworksJSX}</div>
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
