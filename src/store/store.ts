import rootReducer from './reducer';
import sagas from './sagas'
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({reducer: rootReducer(), middleware: [...getDefaultMiddleware(),sagaMiddleware]});
sagaMiddleware.run(sagas)
export default store;   