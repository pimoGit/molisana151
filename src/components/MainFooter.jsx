import MainLogo from "./MainLogo"

const MainFooter = () => {


    // dati delle voci di menù estese del footer
    const pastificioLinks = [
        { label: "Il Pastificio", href: "#" },
        { label: "Grano", href: "#" },
        { label: "Filiera", href: "#" },
        { label: "100 anni di pasta", href: "#" },
        { label: "Sartoria della pasta", href: "#" },
    ];

    const productsLinks = [
        { label: "Le classiche", href: "#" },
        { label: "Le Integrali", href: "#" },
        { label: "Le Speciali", href: "#" },
        { label: "Le Biologiche", href: "#" },
        { label: "Le Gluten-free", href: "#" },
    ];

    // funzione di rendereing link
    function renderProdotti(arrayLink) {
        return arrayLink.map((elementLink, index) => {
            return (<li key={index}>
                <a href={elementLink.href}>{elementLink.label}</a>
            </li>)
        })
    }


    return (
        <footer>
            <nav className="footer-nav">
                <div className="footer-col">
                    <MainLogo />
                </div>
                <div className="footer-col">
                    <div>
                        <h4>Pastificio</h4>
                        <ul>
                            {renderProdotti(pastificioLinks)}
                        </ul>
                    </div>
                </div>
                <div className="footer-col">
                    <div>
                        <h4>Prodotti</h4>
                        <ul>
                            {renderProdotti(productsLinks)}
                        </ul>
                    </div>
                </div>
            </nav>
        </footer>
    )
}

export default MainFooter