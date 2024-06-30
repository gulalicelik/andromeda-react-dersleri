import ProductCard from "../components/ProductCard.jsx";
import {useEffect, useState} from "react";

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <h1>Home</h1>
            <div className="products">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

        </div>
    );

}
export default Home