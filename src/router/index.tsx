import { Route, Routes } from "react-router-dom"
import Main from "../components/main"
import Student from "../components/student"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/student/:id" element={<Student />} />
        </Routes>
    )
}

export default Router