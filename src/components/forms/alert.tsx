import { useDispatch } from "react-redux"
import {setModal} from "store/actionCreators"


const Alert = () => {
    const dispatch = useDispatch()

    const close = () => {
        dispatch(setModal(false))
    }

    return (
        <>
            <button
                onClick={close}
                className={"btn btn-lg btn-success"}
            >
                Хорошо
            </button>
        </>
    )

}

export default Alert