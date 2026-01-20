const ProductCard = (props) => {

    // destructuring
    const { src, title } = props;

    return (
        <div className="prod-card">
            <img src={src} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

export default ProductCard