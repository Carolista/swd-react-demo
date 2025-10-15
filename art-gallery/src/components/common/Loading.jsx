import Spinner from './Spinner.jsx';

const Loading = ({ dataName }) => {
    let data = dataName || 'data';

    return (
        <main className="main-content">
            <h1>Loading</h1>
            <div>Retrieving {data} from server...</div>
            <Spinner />
        </main>
    );
};

export default Loading;
