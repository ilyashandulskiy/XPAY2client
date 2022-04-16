import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import displayCash from "libs/displayCash"
import instance from "libs/instance"
import { Ihistory } from 'types'
import History from "components/history"

interface Istudent {
    name: string,
    cash: number,
    history: Ihistory[]
}

const Student = () => {
    const { id } = useParams()
    const [student, setStudent] = useState<Istudent>()
    
    useEffect(() => {
        instance.get('student/' + id)
            .then(({ data }) => setStudent(data))
    })

    if (!student) return null

    return (
        <div className="student">
            <p className="display-1">{ displayCash(student.cash) }</p>
            <p className="h1">{student.name}</p>
            
            <History
                student_id={id}
                reversed
            />
        </div>
    )

}

export default Student