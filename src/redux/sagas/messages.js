import { takeEvery, call, put, delay, select } from 'redux-saga/effects';
import { CREATE_MESSAGE_REQUEST } from '../actionsConst';
import axios from 'axios';
import { changeLoading, createMessageSuccess, createMessageError } from '../actions';


function* sendMessage() {
  try {
    yield put(changeLoading({loading: true}));
    const text = yield select(state => state.user.text);

    const options = {
      method: 'POST',
      url: 'http://192.168.1.82:3000/message',
      data: {
        name: text,
      }
    };

    const response = yield call(axios, options);
    console.log('response', response.data);
    yield put(createMessageSuccess(response.data));


    yield put(changeLoading({loading: false}));
  } catch (e) {
    yield put(createMessageError(e))

  }
}

function* MessageSaga() {
  yield takeEvery(CREATE_MESSAGE_REQUEST, sendMessage)
}
export default MessageSaga
