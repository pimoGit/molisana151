const Alert = (props) => {

    // descructuting oggetto props
    const { type, children } = props;

    return (
        <div className="alert-container">
            <div className={`alert ${type || 'info'}`}>
                {children}
            </div>
        </div>
    )
}

export default Alert