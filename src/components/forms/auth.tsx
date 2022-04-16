import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import Input from "../ui/input"


const Auth = () => {
    const [name, setName] = useState<string>('')
    const login = useAuth()

    const authorizate = () => {
        login(name)
    }

    return (
        <>
            <Input label="Логин" value={name} onChange={setName} />

            <button
                onClick={authorizate}
                className={"btn btn-lg btn-success"}
            >
                Войти
            </button>
        </>
    )

}

export default Auth