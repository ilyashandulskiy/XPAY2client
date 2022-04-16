import { useState } from "react"
import { useDispatch } from "react-redux"
import useTypedSelector from "../../hooks/useTypedSelector"
import instance from "../../libs/instance"
import { setLoading, setModal, setStudents } from "../../store/actionCreators"
import Input from "../ui/input"


const AddStudent = () => {
    const dispatch = useDispatch()
    const loading = useTypedSelector(state => state.loading)
    const [name, setName] = useState<string>('')

    const onAddStudent = () => {
        dispatch(setLoading('Изменение баланса'))

        instance.post('student', {
            name,
            cash: 0
        })
            .then(({data}) => {
                dispatch(setStudents(data))
                dispatch(setLoading(false))
                dispatch(setModal(false))
            })
            .catch(err => {
                dispatch(setLoading(false))
            })
    }

    return (
        <>
            <Input label="Имя студента" value={name} onChange={setName} />

            <button
                onClick={onAddStudent}
                disabled={loading}
                className={"btn btn-lg btn-success"}
            >
                Добавить
            </button>
        </>
    )

}

export default AddStudent