import { useNavigate, useParams } from 'react-router';
import ErrorPage from '../ErrorPage';
import Loading from '../../common/Loading';
import GoBack from '../../common/GoBack';

const ArtworkDetailsPage = ({ isLoading, artworks }) => {
	const { id } = useParams();

	const navigate = useNavigate();

	const handleGoToPreviousPage = () => {
		navigate(-1);
	};

	const handleGoToArtworksPage = () => {
		navigate('/artworks');
	};

	if (isLoading) {
		return <Loading dataName="artwork" />;
	} else {
		const artwork = artworks.find(artwork => String(artwork.id) === id);

		if (!artwork) {
			return (
				<ErrorPage>
					<p>Sorry, that artwork does not exist!</p>
					<GoBack
						text={'Return to Previous Page'}
						handleClick={handleGoToPreviousPage}
					/>
					<br />
					<GoBack
						text={'View All Artworks'}
						handleClick={handleGoToArtworksPage}
					/>
				</ErrorPage>
			);
		} else {
			return (
				<main className="main-content">
					<GoBack
						text={'View All Artworks'}
						handleClick={handleGoToArtworksPage}
					/>
					<h2>{artwork.title}</h2>
					<div>
						<div>
							<strong>Artist: </strong>
							{artwork.artist}
							{artwork.category && (
								<>
									&nbsp;| <strong>Category: </strong>
									{artwork.category}
								</>
							)}
						</div>
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
