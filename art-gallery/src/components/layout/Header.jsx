import NavMenu from './NavMenu';

const Header = ({ setCurrentPage }) => {
    return (
        <header>
            <div id="mag">
                <strong>Midtown</strong> Art Gallery
            </div>
            <NavMenu setCurrentPage={setCurrentPage} />
        </header>
    );
};

export default Header;
