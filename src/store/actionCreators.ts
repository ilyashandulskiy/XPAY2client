import { Istudent } from "types";
import { AUTH, SELECT_STUDENT, SET_LOADING, SET_MODAL, SET_STUDENTS } from "store/constants";

export const setStudents = (students: Istudent[]) => ({
    type: SET_STUDENTS,
    payload: students
})

export const setLoading = (loading: string | false) => ({
    type: SET_LOADING,
    payload: loading
})

export const setModal = (modal: string | false) => ({
    type: SET_MODAL,
    payload: modal
})

export const selectedStudent = (student: string) => ({
    type: SELECT_STUDENT,
    payload: student
})

export const setAuth = () => ({
    type: AUTH,
    payload: true
})