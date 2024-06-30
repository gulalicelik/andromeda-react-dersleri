import './components.css'
// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            {/* eslint-disable-next-line react/prop-types */}
            <img className="product-image" src={product.image_url}/>
            {/* eslint-disable-next-line react/prop-types */}
            <h3>{product.name}</h3>
            {/* eslint-disable-next-line react/prop-types */}
            <p>{product.price}</p>
            {/* eslint-disable-next-line react/prop-types */}
            <button className="product-card-button">Buy now</button>

        </div>

    );
}

export default ProductCard;