import logo from "../assets/airbnb-logo.png";
function Navbar() {
    return (
        <nav>
            <img src={logo}className="nav--logo" alt="airbinb-logo" />
        </nav>
    );
}

export default Navbar;