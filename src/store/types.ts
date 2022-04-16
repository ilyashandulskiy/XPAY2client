import { Istudent } from 'types';
import {
  SET_STUDENTS, SET_LOADING, SET_MODAL, SELECT_STUDENT, AUTH,
} from 'store/constants';
import constants from 'libs/constants';

export type I_MODALS = typeof constants.MODAL_STATES.ADD_CASH |
    typeof constants.MODAL_STATES.ADD_CASH |
    typeof constants.MODAL_STATES.SUBTRACT_CASH |
    typeof constants.MODAL_STATES.HISTORY |
    typeof constants.MODAL_STATES.ADD_STUDENT |
    typeof constants.MODAL_STATES.RENAME_STUDENT |
    typeof constants.MODAL_STATES.COPIED |
    typeof constants.MODAL_STATES.AUTH

export interface I_SET_STUDENTS {
    type: typeof SET_STUDENTS,
    payload: Istudent[]
}

export interface I_SET_LOADING {
    type: typeof SET_LOADING,
    payload: string | false
}

export interface I_SET_MODAL {
    type: typeof SET_MODAL,
    payload: I_MODALS
}

export interface I_SELECT_STUDENT {
    type: typeof SELECT_STUDENT,
    payload: string
}

export interface I_AUTH {
    type: typeof AUTH,
    payload: boolean
}
