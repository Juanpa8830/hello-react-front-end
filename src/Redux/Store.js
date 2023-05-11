import { configureStore } from '@reduxjs/toolkit';
// import reducers:
import MessagesReducer from './slices/MessagesReducer';

const rootReducer = {
  Messages: MessagesReducer,
};

const store = configureStore({ reducer: rootReducer });// la nueva sintaxis de configureStore

export default store;
