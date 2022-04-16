import { useState } from "react"
import { useDispatch } from "react-redux"
import useTypedSelector from "hooks/useTypedSelector"
import instance from "libs/instance"
import { setLoading, setModal, setStudents } from "store/actionCreators"
import Input from "components/ui/input"

interface Iprops {
    act: 'add' | 'subtract'
}

const ChangeCash = ({act}: Iprops) => {
    const loading = useTypedSelector(state => state.loading)
    const student_id = useTypedSelector(state => state.selectedStudent)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState<string>('0');

    const onAddCash = () => {
        dispatch(setLoading('Изменение баланса'))

        const price = act === 'add' ? Math.abs(+amount) : Math.abs(+amount)*(-1)

        instance.post('deal', {
            student_id,
            price
        })
            .then(({data}) => {
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
            <Input value={amount} label="₽" onChange={setAmount} />

            <button
                disabled={loading}
                onClick={onAddCash}
                className={"btn btn-lg " + (act === 'add' ? 'btn-success' : 'btn-danger')}
            >
                {act === 'add' ? 'Пополнить' : 'Списать'}
            </button>
        </>
    )

}

export default ChangeCash