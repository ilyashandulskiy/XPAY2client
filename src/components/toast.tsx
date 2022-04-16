import useTypedSelector from "hooks/useTypedSelector"

const Toast = () => {

    const loadingText = useTypedSelector(state => state.loading)

    if (!loadingText) return null

    return (
        <div className="alert alert-light alert-dismissible fade show toast" role="alert">
            <div className="spinner-border text-dark" role="status">
            </div>
            <h5 className="toast__text">{ loadingText }</h5>
        </div>
    )

}

export default Toast