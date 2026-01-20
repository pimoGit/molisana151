const ProductCard = (props) => {

    // destructuring
    const { src, title } = props.product;

    return (
        <div className="prod-card">
            <img src={src} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

export default ProductCard

// const props = {
//     product: {
//         title: "valore del titolo passato";
//         src: "valore di src passato dalla props"
//     }

// }