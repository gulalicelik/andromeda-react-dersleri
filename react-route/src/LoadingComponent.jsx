import {useState} from "react";

import ClipLoader from "react-spinners/ClipLoader";


const LoadingComponent = () => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        setLoading(!loading);
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }
    return (
        <div>
            {loading ? <ClipLoader
                color={"#FFFFFF"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> : <h1>Loaded</h1>}
            <button onClick={handleClick}>Toggle Loading</button>

        </div>
    );
}

export default LoadingComponent;