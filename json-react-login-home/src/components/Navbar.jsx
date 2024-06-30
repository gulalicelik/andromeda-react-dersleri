import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar" style={{width:"500px"}}>
            <ul style={{display : "flex", alignItems : "center", justifyContent : "space-between"}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar