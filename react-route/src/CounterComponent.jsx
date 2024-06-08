import {useState} from "react";

const CounterComponent = () => {
    const [counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(counter + 1)
    }
    const decrease = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <h1>Counter</h1>
            <h1 style={{fontSize:44}}>{counter}</h1>
            <button onClick={increase}>Arttır</button>
            <button onClick={decrease}>Azalt</button>
        </div>
    );
}

export default CounterComponent;