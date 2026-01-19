const Navbar = () => {

    // dati per i link di navigazione
    const links = [
        { id: 1, text: 'Home', url: '#', current: false },
        { id: 2, text: 'Prodotti', url: '#', current: true },
        { id: 3, text: 'Chi Siamo', url: '#', current: false },
        { id: 4, text: 'Contatti', url: '#', current: false },
    ];


    return (
        <nav>
            <ul>
                {links.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.url}
                                className={link.current ? 'active' : ''}>
                                {link.text}
                            </a>
                        </li>
                    )
                })

                }


                {/* <li><a href="#">Home</a></li>
                <li><a href="#" className="active">Prodotti</a></li>
                <li><a href="#">Chi Siamo</a></li>
                <li><a href="#">Contatti</a></li> */}
            </ul>
        </nav>
    )
}

export default Navbar