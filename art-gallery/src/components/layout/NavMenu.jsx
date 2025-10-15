import { Link } from 'react-router';

const NavMenu = () => {
    return (
        <div className="nav-menu">
            <Link className="link" to="/">
                Home
            </Link>
            <Link className="link" to="/about">
                About
            </Link>
            <Link className="link" to="/artworks">
                Artworks
            </Link>
            <Link className="link" to="/events">
                Events
            </Link>
            <Link className="link" to="/location">
                Location
            </Link>
        </div>
    );
};

export default NavMenu;
