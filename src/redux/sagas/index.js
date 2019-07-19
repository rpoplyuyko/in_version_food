import {all} from 'redux-saga/effects'
import UserSaga from './users'
import MessageSaga from './messages'

function* rootSaga() {
 yield all([
   UserSaga(),
   MessageSaga()
 ])
}
export default rootSaga;
