import { useState } from "react"
import { useDispatch } from "react-redux"
import constants from "../libs/constants"
import copyToClipboard from "../libs/copyToClipboard"
import displayCash from "../libs/displayCash"
import { selectedStudent, setLoading, setModal } from "../store/actionCreators"

interface Iprops {
    name: string,
    cash: number,
    index: number,
    count: number,
    id: string
}


const Item = ({name, cash, index, id, count}: Iprops) => {
    const [hover, setHover] = useState<boolean>(false)
    const dispatch = useDispatch()

    const onAddCash = () => {
        dispatch(setModal(constants.modal_states.ADD_CASH))
        dispatch(selectedStudent(id))
    }

    const onSubtractCash = () => {
        dispatch(setModal(constants.modal_states.SUBTRACT_CASH))
        dispatch(selectedStudent(id))
    }

    const onHistory = () => {
        dispatch(setModal(constants.modal_states.HISTORY))
        dispatch(selectedStudent(id))
    }

    const onRename = () => {
        dispatch(setModal(constants.modal_states.RENAME_STUDENT))
        dispatch(selectedStudent(id))
    }

    const onStudent = () => {
        dispatch(setModal(constants.modal_states.COPIED))
        copyToClipboard(constants.studentURL + id)
    }

    return (
        <tr
            onMouseOver={() => setHover(true)}        
            onMouseLeave={() => setHover(false)}        
        >
            <th scope="row">{index+1}</th>
            <td onClick={onRename}>{name}</td>
            <td>{displayCash(cash)}</td>
            <td className="item-buttons">
                <div className="item-buttons__inner" style={{
                    opacity: hover ? 1 : 0.2
                }}>
                    <button className="btn btn-outline-success item-btn" onClick={onAddCash}>Пополнить</button>
                    <button className="btn btn-outline-danger item-btn" onClick={onSubtractCash}>Списать</button>
                    <button className="btn btn-outline-secondary item-btn" onClick={onStudent}>Кабинет</button>
                    <button className="btn btn-outline-secondary item-btn" onClick={onHistory}>История</button>
                    {/* <button className="btn btn-outline-secondary item-btn" onClick={onDelete}>Удалить</button> */}
                </div>
            </td>
        </tr>
    )
}

export default Item