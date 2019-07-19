import {
  CREATE_USER_REQUEST,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  CHANGE_LOADING,
  CHANGE_NAME,
  CHANGE_TEXT,
  CREATE_MESSAGE_ERROR,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_REQUEST
} from '../actionsConst'


export const changeLoading = (payload) => ({type: CHANGE_LOADING, payload});


export const changeName = (payload) => ({type: CHANGE_NAME, payload});
export const createUserRequest = () => ({type: CREATE_USER_REQUEST});
export const createUserSuccess = (payload) => ({type: CREATE_USER_SUCCESS, payload});
export const createUserError = (payload) => ({type: CREATE_USER_ERROR, payload});


export const changeText = (payload) => ({type: CHANGE_TEXT, payload});
export const createMessageRequest = () => ({type: CREATE_MESSAGE_REQUEST});
export const createMessageSuccess = (payload) => ({type: CREATE_MESSAGE_SUCCESS, payload});
export const createMessageError = (payload) => ({type: CREATE_MESSAGE_ERROR, payload});

