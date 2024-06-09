import {useEffect, useState} from "react";
import ProductCard from "../component/ProductCard.jsx";
import ClipLoader from "react-spinners/ClipLoader";

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, []);
    return (
        <div>
            <h1>All Products</h1>
            {loading ? <ClipLoader
                color={"#FFFFFF"}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> : <div className="products">
                {products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>}

        </div>
    );
}

export default Products;