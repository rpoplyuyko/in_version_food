import { takeEvery, call, put, delay, select } from 'redux-saga/effects';
import { CREATE_USER_REQUEST } from '../actionsConst';
import axios from 'axios';
import { changeLoading, createUserSuccess, createUserError } from '../actions';


function* createUser() {
  try {
    yield put(changeLoading({loading: true}));
    const text = yield select(state => state.user.text);

    const options = {
      method: 'POST',
      url: 'http://192.168.1.82:3000/users',
      data: {
        name: text,
      }
    };

    const response = yield call(axios, options);
    console.log('response', response.data);
    yield put(createUserSuccess(response.data));


    yield put(changeLoading({loading: false}));
  } catch (e) {
    yield put(createUserError(e))

  }
}

function* UserSaga() {
  yield takeEvery(CREATE_USER_REQUEST, createUser)
}
export default UserSaga
