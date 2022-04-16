import { useState } from "react"
import { useDispatch } from "react-redux"
import constants from "libs/constants"
import copyToClipboard from "libs/copyToClipboard"
import displayCash from "libs/displayCash"
import { selectedStudent, setModal } from "store/actionCreators"
import lang from "libs/lang"

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
        dispatch(setModal(constants.MODAL_STATES.ADD_CASH))
        dispatch(selectedStudent(id))
    }

    const onSubtractCash = () => {
        dispatch(setModal(constants.MODAL_STATES.SUBTRACT_CASH))
        dispatch(selectedStudent(id))
    }

    const onHistory = () => {
        dispatch(setModal(constants.MODAL_STATES.HISTORY))
        dispatch(selectedStudent(id))
    }

    const onRename = () => {
        dispatch(setModal(constants.MODAL_STATES.RENAME_STUDENT))
        dispatch(selectedStudent(id))
    }

    const onStudent = () => {
        dispatch(setModal(constants.MODAL_STATES.COPIED))
        copyToClipboard(constants.STUDENT_URL + id)
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
                    <button
                        className="btn btn-outline-success item-btn"
                        onClick={onAddCash}
                    >
                        {lang.CASH.ADD}
                    </button>
                    <button
                        className="btn btn-outline-danger item-btn"
                        onClick={onSubtractCash}
                    >
                        {lang.CASH.SUBTRACT}
                    </button>
                    <button
                        className="btn btn-outline-secondary item-btn"
                        onClick={onStudent}
                    >
                        {lang.CASH.ROOM}
                    </button>
                    <button
                        className="btn btn-outline-secondary item-btn"
                        onClick={onHistory}
                    >
                        {lang.CASH.HISTORY}
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default Item