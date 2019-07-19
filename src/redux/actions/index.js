import {CREATE_USER_REQUEST, CREATE_USER_ERROR, CREATE_USER_SUCCESS, CHANGE_LOADING, CHANGE_NAME} from '../actionsConst'

export const createUserRequest = () => ({type: CREATE_USER_REQUEST});
export const createUserSuccess = (payload) => ({type: CREATE_USER_SUCCESS, payload});
export const createUserError = (payload) => ({type: CREATE_USER_ERROR, payload});
export const changeLoading = (payload) => ({type: CHANGE_LOADING, payload});
export const changeName = (payload) => ({type: CHANGE_NAME, payload});
