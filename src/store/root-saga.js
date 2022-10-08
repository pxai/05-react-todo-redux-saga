import { all, call } from 'redux-saga/effects';
import { taskSagas } from './task/task.saga';

export function* rootSaga () {
    yield all([call(taskSagas)]);
}
