import { CHANGE_NAME, CHANGE_LOADING, CREATE_USER_SUCCESS } from '../actionsConst';

const INITIAL_STATE = {
  text: null,
  loading: false,
  userId: null,
  name: null
};
function User(state = INITIAL_STATE, action) {
  const {type, payload ={}} = action;
  switch (type) {
    case CHANGE_NAME: {
      return {
        ...state,
        text: payload,
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
