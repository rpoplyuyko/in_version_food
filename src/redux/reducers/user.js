import {
  CHANGE_SEX,
  CHANGE_AGE,
  CHANGE_HEIGHT,
  CHANGE_WEIGHT,
  CHANGE_LOADING,
  CREATE_USER_SUCCESS
} from '../actionsConst';

const INITIAL_STATE = {
  text: null,
  loading: false,
  sex: 'male',
  age: 0,
  height: 0,
  weight: 0,
};
function User(state = INITIAL_STATE, action) {
  const {type, payload ={}} = action;
  switch (type) {
    case CHANGE_SEX: {
      return {
        ...state,
        sex: payload,
      }
    }
    case CHANGE_AGE: {
      return {
        ...state,
        age: payload,
      }
    }
    case CHANGE_HEIGHT: {
      return {
        ...state,
        height: payload,
      }
    }
    case CHANGE_WEIGHT: {
      return {
        ...state,
        weight: payload,
      }
    }
    case CHANGE_LOADING: {
      return {
        ...state,
        loading: payload.loading,
      }
    }
    case CREATE_USER_SUCCESS: {
      const { id: userId, name } = payload;
      return {
        ...state,
        userId,
        name,
      }
    }
    default : return state
  }
}
export default User
