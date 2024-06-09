import './components.css'
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductCard = ({product}) => {

    return (
        // eslint-disable-next-line react/prop-types
        <div key={product.id} className="product">
            {/* eslint-disable-next-line react/prop-types */}
            <img src={product.image} alt={product.title} width={200}/>
            {/* eslint-disable-next-line react/prop-types */}
            <h3>{product.title}</h3>
            {/* eslint-disable-next-line react/prop-types */}
            <p>{product.price} $</p>
            {/* eslint-disable-next-line react/prop-types */}
            <Link to={`/product-detail/${product.id}`}>View detail</Link>



        </div>
    )
}

export default ProductCard;