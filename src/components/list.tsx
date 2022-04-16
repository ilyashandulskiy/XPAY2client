import { useEffect } from "react"
import { useDispatch } from "react-redux"
import useTypedSelector from "../hooks/useTypedSelector"
import { auth } from "../hooks/useAuth"
import constants from "../libs/constants"
import instance from "../libs/instance"
import { setStudents, setLoading, setModal } from "../store/actionCreators"
import { Istudent } from "../types"
import Item from "./item"

const List = () => {
    const students = useTypedSelector(state => state.students)
    const isAuth = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()

    const loadStudents = () => {
        instance.get('students')
        .then(({ data }) => {
            dispatch(setStudents(data));
            dispatch(setLoading(false));
        })
        .catch(console.log)
    }

    useEffect(() => {
        if (auth()) {
            loadStudents()
        } else {
            dispatch(setModal(constants.modal_states.AUTH))
        }
    }, [isAuth])

    const onAddStudent = () => {
        dispatch(setModal(constants.modal_states.ADD_STUDENT))
    }

    return (
        <div className="list">
            <table className="table table-striped ">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Имя студента</th>
            <th scope="col">Баланс</th>
            <th scope="col">Действия</th>
          </tr>
          </thead>
          <tbody>
            {
                students.map((item: Istudent, index: number) => <Item id={item._id} count={item.count} name={item.name} cash={item.cash} index={index} />)
            }
          </tbody>
            </table>
            <div className="add-button-container">
                <button onClick={onAddStudent} className="btn btn-lg btn-outline-success add-btn">Добавить студента</button>
            </div>
        </div>
    )
}

export default List