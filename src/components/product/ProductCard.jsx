const ProductCard = (props) => {

    // destructuring
    const { src, title } = props.product;

    // funzione di esempio
    const sayHello = () => {
        alert("ciao");
    }

    return (
        <div className="prod-card">
            <img onClick={sayHello} src={src} alt={title} />
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