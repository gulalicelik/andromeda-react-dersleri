import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/about/phone/44">Go to about with path variable</Link>
        </div>
    );

}
export default Home