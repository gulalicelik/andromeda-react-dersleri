import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

        </>
    )
}

export default App
