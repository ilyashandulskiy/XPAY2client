import { auth } from "hooks/useAuth"
import { Istudent } from "types"
import { AUTH, SELECT_STUDENT, SET_LOADING, SET_MODAL, SET_STUDENTS } from "store/constants"
import lang from "libs/lang"
import { I_AUTH, I_SELECT_STUDENT, I_SET_LOADING, I_SET_MODAL, I_SET_STUDENTS } from "./types"

export interface Istate {
    students: Istudent[],
    loading: string | false,
    modal: string | false,
    selectedStudent: string,
    auth: boolean
}

export type Iaction = I_SET_STUDENTS |
    I_SET_LOADING | I_SET_MODAL | I_SELECT_STUDENT | I_AUTH;

export const initState: Istate = {
    students: [],
    loading: lang.TOAST.LOADING_STUDENTS,
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
            return { ...state, modal: action.payload }

        case SELECT_STUDENT:
            return { ...state, selectedStudent: action.payload }
        
        case AUTH:
            return { ...state, auth: action.payload}
    
        default:
            return state
    }
}

export default Reducer