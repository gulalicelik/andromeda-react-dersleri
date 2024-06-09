import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <p>generic navbar</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar