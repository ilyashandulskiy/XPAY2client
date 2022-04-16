import { auth } from "../hooks/useAuth"
import { Istudent } from "../types"
import { AUTH, SELECT_STUDENT, SET_LOADING, SET_MODAL, SET_STUDENTS } from "./constants"

export interface Istate {
    students: Istudent[],
    loading: string | false,
    modal: string | false,
    selectedStudent: string,
    auth: boolean
}

export interface Iaction {
    type: string,
    payload: any,
}

export const initState: Istate = {
    students: [],
    loading: 'Загрузка студентов',
    modal: '',
    selectedStudent: '',
    auth: auth()
}

const Reducer = (state: Istate = initState, action: Iaction) => {

    switch (action.type) {
        case SET_STUDENTS:
            return { ...state, students: action.payload }
        
        case SET_LOADING:
            return { ...state, loading: action.payload}

        case SET_MODAL:
            return { ...state, modal: action.payload}

        case SELECT_STUDENT:
            return { ...state, selectedStudent: action.payload }
        
        case AUTH:
            return { ...state, auth: action.payload}
    
        default:
            return state
    }
}

export default Reducer