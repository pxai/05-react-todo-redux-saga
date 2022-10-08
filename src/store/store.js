import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga'; 
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [logger, sagaMiddleware] //.filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);