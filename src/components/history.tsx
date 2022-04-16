import { useEffect, useState } from "react"
import useTypedSelector from "hooks/useTypedSelector"
import instance from "libs/instance"
import { Ihistory } from "types"
import HistoryItem from "components/historyItem"

interface Iprops {
    student_id?: string,
    reversed?: boolean
}

const History = ({ student_id, reversed }: Iprops) => {
    const selectedStudent = useTypedSelector(state => state.selectedStudent)
    const student = student_id || selectedStudent
    const [history, setHistory] = useState<Ihistory[]>([])

    useEffect(() => {
        instance.get('history/' + student)
            .then(({ data }) => {
                setHistory(reversed ? data.reverse() : data)
            })
    }, [])
    
    return (
        <table className="table table-hover">
            <tbody className="history__list">
                {
                    history.map((item: Ihistory) => <HistoryItem time={item.time} price={item.price} />)
                }
            </tbody>
        </table>
    )
}

export default History