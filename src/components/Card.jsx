

const Card = ({product}) => {
    return (
        <>
        <div className="card">
            <img src={product.image} alt="product" />
            <h4>{product.title}</h4>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <button>Add to Cart</button>
        </div>
        </>
    )
}

export default Card;