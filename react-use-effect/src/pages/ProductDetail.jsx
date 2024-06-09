import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductCard from "../component/ProductCard.jsx";
import ClipLoader from "react-spinners/ClipLoader.js";

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id]);


    return (
        <div>
            <h1>Product Detail Page</h1>
            {loading ? <ClipLoader
                color={"#FFFFFF"}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> : <div className="products">
                {<ProductCard key={product.id} product={product}/>}
            </div>}
        </div>
    );
}

export default ProductDetail;