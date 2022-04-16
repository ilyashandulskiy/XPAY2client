import { useState } from "react"
import { useDispatch } from "react-redux"
import useTypedSelector from "hooks/useTypedSelector"
import instance from "libs/instance"
import { setLoading, setModal, setStudents } from "store/actionCreators"
import Input from "components/ui/input"


const RenameStudent = () => {
    const dispatch = useDispatch()
    const loading = useTypedSelector(state => state.loading)
    const selected = useTypedSelector(state => state.selectedStudent)
    const [name, setName] = useState<string>('')

    const onAddStudent = () => {
        dispatch(setLoading('Изменение информации'))

        instance.post('student/' + selected, {
            name
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
            <Input value={name} label="Имя студента" onChange={setName} />

            <button
                onClick={onAddStudent}
                disabled={loading}
                className={"btn btn-lg btn-success"}
            >
                Переименовать
            </button>
        </>
    )

}

export default RenameStudent