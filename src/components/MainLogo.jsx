const MainLogo = (props) => {
    return (
        <figure>
            <img src="/logo.png" alt={props.slogan} />
            <p>{props.slogan}</p>
        </figure>
    )
}

export default MainLogo