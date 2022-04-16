import { useDispatch } from "react-redux"
import useTypedSelector from "hooks/useTypedSelector"
import constants from "libs/constants"
import { setModal } from "store/actionCreators"
import AddStudent from "components/forms/addStudent"
import Alert from "components/forms/alert"
import Auth from "components/forms/auth"
import ChangeCash from "components/forms/changeCash"
import RenameStudent from "components/forms/renameStudent"
import History from "components/history"

const Modal = () => {
    const dispatch = useDispatch()
    const visible = useTypedSelector(state => state.modal)

    let title
    let component
    let closeble = true

    const onClose = () => {
        dispatch(setModal(false))
    }

    const Welcome = () => (
        <>
            <p>Полностью переделанная платформа, которая теперь использует новейшие технологии!</p>
            <p>Новая версия в десятки раз стабильнее, безопаснее и быстрее!</p>
            <img className="welcome-emoji" alt="welcome" src="./images/welcome.png" />
            <button className="btn btn-lg btn-success" onClick={onClose}>Отлично!</button> 
        </>
    )

    switch (visible) {
        case constants.modal_states.WELCOME:
            title = 'Добро пожаловать в XPAY 4.0!'
            component = <Welcome />
            break;
        case constants.modal_states.ADD_CASH:
            title = 'Пополнить баланс'
            component = <ChangeCash act="add" />
            break;
        case constants.modal_states.SUBTRACT_CASH:
            title = 'Списать баланс'
            component = <ChangeCash act="subtract" />
            break;
        case constants.modal_states.HISTORY:
            title = 'История платежей'
            component = <History />
            break;
        case constants.modal_states.ADD_STUDENT:
            title = 'Добавить студента'
            component = <AddStudent />
            break;
        case constants.modal_states.RENAME_STUDENT:
            title = 'Переименовать студента'
            component = <RenameStudent />
            break;
        case constants.modal_states.COPIED:
            title = 'Ссылка скопирована!'
            component = <Alert />
            break;
        case constants.modal_states.AUTH:
            title = 'Войти в аккаунт'
            closeble = false
            component = <Auth />
            break;
    }
    
    return (
        <>
            <div style={{pointerEvents: visible ? 'all' : 'none'}} className={"modal-backdrop fade " + (visible && "show")}></div>
            <div style={{pointerEvents: visible ? 'all' : 'none', display: 'block'}} className={"modal fade " + (visible && "show")} id="exampleModalDefault" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            {
                                closeble ?
                                    <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    :
                                    null
                            }
                        </div>
                        <div className="modal-body">
                            {component}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Modal