import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EnterName from './src/screens/EnterName';
import { Provider } from 'react-redux';
import allReducers from "./src/redux/reducers";

import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from "redux";
import rootSaga from './src/redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default App = () => {
    return (
      <Provider store={store}>
        <View style={styles.container}>
                  <Text>Open up App.js to start working on your app!</Text>
                  <EnterName />
        </View>
      </Provider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
