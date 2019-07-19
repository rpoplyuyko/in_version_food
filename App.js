import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EnterName from './src/screens/EnterName';
import ChatPage from './src/screens/ChatRoom/'
import { Provider } from 'react-redux';
import allReducers from "./src/redux/reducers";

import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from "redux";
import rootSaga from './src/redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
import {createStackNavigator, createAppContainer} from 'react-navigation';
const MainNavigator = createStackNavigator({
  Home: {screen: EnterName},
  Chat: {screen: ChatPage},
}, {initialRouteName: 'Home'});
const AppContainer = createAppContainer(MainNavigator);

export default App = () => {
    return (
      <Provider store={store}>
        <AppContainer />
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
