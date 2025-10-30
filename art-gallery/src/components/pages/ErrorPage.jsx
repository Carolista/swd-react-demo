import Spacer from '../common/Spacer';

const ErrorPage = ({ children }) => {
    return (
        <main className="main-content">
            <h1>ERROR</h1>
            <h3>Uh oh! Something didn't go quite right. </h3>
            <Spacer marginY="20px" />
            <div>{children}</div>
        </main>
    );
};

export default ErrorPage;
