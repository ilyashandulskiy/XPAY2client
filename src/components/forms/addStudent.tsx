import { useState } from "react"
import { useDispatch } from "react-redux"
import useTypedSelector from "hooks/useTypedSelector"
import instance from "libs/instance"
import { setLoading, setModal, setStudents } from "store/actionCreators"
import Input from "components/ui/input"
import lang from "libs/lang"
import constants from "libs/constants"

const AddStudent = () => {
    const dispatch = useDispatch()
    const loading = useTypedSelector(state => state.loading)
    const [name, setName] = useState<string>('')

    const onAddStudent = () => {
        dispatch(setLoading(lang.TOAST.CHANGING_BALANCE))

        instance.post(constants.API_METHODS.STUDENT, {
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
            <Input
                label={lang.FORMS.STUDENT_NAME}
                value={name}
                onChange={setName}
            />

            <button
                onClick={onAddStudent}
                disabled={Boolean(loading)}
                className={"btn btn-lg btn-success"}
            >
                {lang.FORMS.ADD}
            </button>
        </>
    )

}

export default AddStudent