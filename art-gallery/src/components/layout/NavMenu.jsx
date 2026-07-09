// Temporary pre-router navigation uses currentPage plus prop drilling 
// via setCurrentPage; this will be replaced by React Router in Part 5.
const NavMenu = ({ setCurrentPage }) => {
    // TODO #5: Remove handlers, currentPage prop, and use <Link> instead with routes
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
