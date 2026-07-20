import { Link } from 'react-router';

const NavMenu = () => {
    return (
        <nav>
            <ul className="nav-menu">
                <li>
                    <Link className="link" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/artworks">
                        Artworks
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/events">
                        Events
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/location">
                        Location
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
