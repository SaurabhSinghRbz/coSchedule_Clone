
import * as types from './actiontypes'



export const addNewProject = (params) => (dispatch) => {

    dispatch({ type: types.ADD_NEW_PROJECT, payload: params })

}

export const editProject = (refNO, text) => (dispatch) => {
    dispatch({ type: types.EDIT_PROJECT, payload: [refNO, text] })
}

export const deleteProject = (refNO) => (dispatch) => {
    dispatch({ type: types.Delete_PROJECT, payload: refNO })
}

export const resetState = () => (dispatch) => {
    dispatch({ type: types.RESET_STATE })
}