import { useDispatch } from "react-redux"
import { setAuth, setModal } from "store/actionCreators"

const loginName = 'sergey'
const authToken = 'KSV'

export const auth = () => {
    return localStorage.getItem('xpay_loginID')  === authToken
}

const Login = () => {
    const dispatch = useDispatch()
    return function(passcode: string){

        if (passcode === loginName) {
            localStorage.setItem('xpay_loginID', authToken)
            dispatch(setAuth())
            dispatch(setModal(false))
            return true
        } else {
            return false
        }
    }
 }

export default Login