import GoBack from '../../common/GoBack';
import Spacer from '../../common/Spacer';
import ErrorPage from '../ErrorPage';
import LoadingPage from '../LoadingPage';
import ArtworkCard from './ArtworkCard';

// TODO #7: Remove setCurrentPage prop and create a click handler that navigates to the home page on GoBack instead
// TODO #12: Link ArtworkCard to ArtworkDetailsPage for that artwork
//  and move key attribute

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
