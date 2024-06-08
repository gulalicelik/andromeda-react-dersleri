import {useState} from "react";

const About = () => {
    // const number = 20;
    const [count, setCount] = useState(5)
    const [name, setName] = useState("ali")
    const [age, setAge] = useState(20)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState({})
    const [items, setItems] = useState([])

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>About</h1>
            <p>Welcome to the About page</p>
            <p>{count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    );
}
export default About;