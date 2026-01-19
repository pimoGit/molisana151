const Navbar = () => {

    // dati per i link di navigazione
    const links = [
        { id: 1, text: 'Home', url: '#', current: false },
        { id: 2, text: 'Prodotti', url: '#', current: true },
        { id: 3, text: 'Chi Siamo', url: '#', current: false },
        { id: 4, text: 'Contatti', url: '#', current: false },
    ];

    // funzione rendering links
    const linkListRender = links.map((link) => {
        return (
            <li key={link.id}>
                <a href={link.url}
                    className={link.current ? 'active' : ''}>
                    {link.text}
                </a>
            </li>
        )
    });

    return (
        <nav>
            <ul>
                {linkListRender}
            </ul>
        </nav>
    )
}

export default Navbar