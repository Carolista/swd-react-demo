import Spacer from '../common/Spacer';

const ErrorPage = ({ children }) => {
    return (
        <main className="main-content">
            <h1>ERROR</h1>
            <h2 className="error-page-subheading">Uh oh! Something didn't go quite right. </h2>
            <Spacer marginY="20px" />
            <div>{children}</div>
        </main>
    );
};

export default ErrorPage;
