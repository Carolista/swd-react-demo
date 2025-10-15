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
        </div>
    );
};

export default NavMenu;
