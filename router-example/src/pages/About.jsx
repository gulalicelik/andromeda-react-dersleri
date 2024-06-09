import {useParams} from "react-router-dom";

const About = () => {
    const {id,category} = useParams();
    return (
        <div>
            <h1>About {id} {category}</h1>
        </div>
    );

}
export default About