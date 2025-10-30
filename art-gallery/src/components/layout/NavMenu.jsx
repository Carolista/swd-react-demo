// TODO #5: Remove handlers and use <Link> instead with routes

const NavMenu = ({ setCurrentPage }) => {
    return (
        <div className="nav-menu">
            <span
                className="link"
                onClick={() => {
                    setCurrentPage('home');
                }}
            >
                Home
            </span>
            <span
                className="link"
                onClick={() => {
                    setCurrentPage('about');
                }}
            >
                About
            </span>
            <span
                className="link"
                onClick={() => {
                    setCurrentPage('artworks');
                }}
            >
                Artworks
            </span>
            <span
                className="link"
                onClick={() => {
                    setCurrentPage('events');
                }}
            >
                Events
            </span>
            <span
                className="link"
                onClick={() => {
                    setCurrentPage('location');
                }}
            >
                Location
            </span>
        </div>
    );
};

export default NavMenu;
