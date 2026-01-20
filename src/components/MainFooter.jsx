import MainLogo from "./MainLogo"

const MainFooter = () => {


    // dati delle voci di menù estese del footer
    const footerSections = [
        {
            title: "Pastificio",
            links: [
                { label: "Il Pastificio", href: "#" },
                { label: "Grano", href: "#" },
                { label: "Filiera", href: "#" },
                { label: "100 anni di pasta", href: "#" },
                { label: "Sartoria della pasta", href: "#" },
            ],
        },
        {
            title: "Prodotti",
            links: [
                { label: "Le classiche", href: "#" },
                { label: "Le Integrali", href: "#" },
                { label: "Le Speciali", href: "#" },
                { label: "Le Biologiche", href: "#" },
                { label: "Le Gluten-free", href: "#" },
            ],
        },
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
                    <MainLogo slogan="La pasta più buona del mondo!" />
                </div>
                {footerSections.map((footerSec, indice) => (
                    <div className="footer-col" key={indice}>
                        <div>
                            <h4>{footerSec.title}</h4>
                            <ul>
                                {renderProdotti(footerSec.links)}
                            </ul>
                        </div>
                    </div>
                ))

                }
            </nav>
        </footer>
    )
}

export default MainFooter