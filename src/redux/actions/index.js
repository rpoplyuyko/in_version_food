import {
  CREATE_USER_REQUEST,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  CHANGE_LOADING,
  CHANGE_SEX,
  CHANGE_AGE,
  CHANGE_HEIGHT,
  CHANGE_WEIGHT,
  CHANGE_TEXT,
  CREATE_MESSAGE_ERROR,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_REQUEST
} from '../actionsConst'


export const changeLoading = (payload) => ({type: CHANGE_LOADING, payload});


export const changeSex = (payload) => ({type: CHANGE_SEX, payload});
export const changeAge = (payload) => ({type: CHANGE_AGE, payload});
export const changeHeight = (payload) => ({type: CHANGE_HEIGHT, payload});
export const changeWeight = (payload) => ({type: CHANGE_WEIGHT, payload});
export const createUserRequest = () => ({type: CREATE_USER_REQUEST});
export const createUserSuccess = (payload) => ({type: CREATE_USER_SUCCESS, payload});
export const createUserError = (payload) => ({type: CREATE_USER_ERROR, payload});


export const changeText = (payload) => ({type: CHANGE_TEXT, payload});
export const createMessageRequest = () => ({type: CREATE_MESSAGE_REQUEST});
export const createMessageSuccess = (payload) => ({type: CREATE_MESSAGE_SUCCESS, payload});
export const createMessageError = (payload) => ({type: CREATE_MESSAGE_ERROR, payload});

