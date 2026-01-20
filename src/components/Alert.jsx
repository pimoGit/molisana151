const Alert = (props) => {

    // descructuting oggetto props
    const { type, message } = props;

    return (
        <div className="alert-container">
            <div className={`alert ${type || 'info'}`}>
                {message}
            </div>
        </div>
    )
}

export default Alert