import { useState } from "react"
import { useDispatch } from "react-redux"
import useTypedSelector from "hooks/useTypedSelector"
import instance from "libs/instance"
import { setLoading, setModal, setStudents } from "store/actionCreators"
import Input from "components/ui/input"
import lang from "libs/lang"
import constants from "libs/constants"

interface Iprops {
    act: 'add' | 'subtract'
}

const ChangeCash = ({act}: Iprops) => {
    const loading = useTypedSelector(state => state.loading)
    const student_id = useTypedSelector(state => state.selectedStudent)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState<string>('0');

    const onAddCash = () => {
        dispatch(setLoading(lang.TOAST.CHANGING_BALANCE))

        const price = act === 'add' ? Math.abs(+amount) : Math.abs(+amount)*(-1)

        instance.post(constants.API_METHODS.DEAL, {
            student_id,
            price
        })
            .then(({ data }) => {
                dispatch(setStudents(data))
                dispatch(setLoading(false))
                dispatch(setModal(false))
                setAmount('0')
            })
            .catch(err => {
                dispatch(setLoading(false))
            })
    }

    return (
        <>
            <Input
                value={amount}
                label={lang.CURRENCY.SIGN}
                onChange={setAmount}
            />

            <button
                disabled={Boolean(loading)}
                onClick={onAddCash}
                className={"btn btn-lg " + (act === 'add' ? 'btn-success' : 'btn-danger')}
            >
                {act === 'add' ? lang.CASH.ADD : lang.CASH.SUBTRACT}
            </button>
        </>
    )
}

export default ChangeCash