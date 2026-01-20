const MainLogo = ({ slogan }) => {

    // estrapoliamo prop singola
    // const slogan = props.slogan;
    // const { slogan } = props;

    return (
        <figure>
            <img src="/logo.png" alt={slogan} />
            <p>{slogan}</p>
        </figure>
    )
}

export default MainLogo