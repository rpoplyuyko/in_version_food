import { CHANGE_TEXT, CHANGE_LOADING } from '../actionsConst';

const INITIAL_STATE = {
  text: null,
  loading: false,
  userId: null,
  name: null
};
function Message(state = INITIAL_STATE, action) {
  const {type, payload ={}} = action;
  switch (type) {
    case CHANGE_TEXT: {
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
    default : return state
  }
}
export default Message
