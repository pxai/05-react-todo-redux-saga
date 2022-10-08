import { takeLatest, all , call, put} from 'redux-saga/effects';
import axios from 'axios';
import { 
    selectTasksSuccess, selectTasksError,
    addTaskSuccess, addTaskError, 
    updateTaskSuccess, updateTaskError,
    removeTaskSuccess, removeTaskError
} from './task.actions';
import { TASKS_ACTION_TYPES } from './task.types';


export function* selectTasksAsync ()  {
    try {        
        const response = yield call(() => axios.get('/api/tasks'));        
        yield put(selectTasksSuccess(response.data)); // put is like dispatch
    } catch (error) {
        yield put(selectTasksError(error))
    }
};

export function* onSelectTasks () {
    yield takeLatest(TASKS_ACTION_TYPES.SELECT_TASKS_START, selectTasksAsync);
}

export function* addTaskAsync({payload: {name}}) {
    try {
        const response = yield call(() => axios.post('/api/tasks', {name}));
        yield put(addTaskSuccess(response.data));
    } catch (error) {
        yield put(addTaskError(error));
    }
}

export function* onAddTask () {
    yield takeLatest(TASKS_ACTION_TYPES.ADD_TASK_START, addTaskAsync);
}

export function* updateTaskAsync ({payload: {task}}) {
    try {
        const response = yield call(() => axios.put('/api/tasks', {...task}));
        yield put(updateTaskSuccess(response.data));
    } catch (error) {
        yield put(updateTaskError(error));
    }
}

export function* onUpdateTask () {
    yield takeLatest(TASKS_ACTION_TYPES.UPDATE_TASK_START, updateTaskAsync);
}

export function* removeTaskAsync ({payload: {id}})  {
    try {
        const response = yield call(() => axios.delete(`/api/tasks/${id}`));
        yield put(removeTaskSuccess(response.data))
    } catch (error) {
        yield put(removeTaskError(error));
    }
} 

export function* onRemoveTask () {
    yield takeLatest(TASKS_ACTION_TYPES.REMOVE_TASK_START, removeTaskAsync);
}

// generator acumulates all sagass
export function* taskSagas () {
    yield all([
        call(onSelectTasks),
        call(onAddTask),
        call(onUpdateTask),
        call(onRemoveTask)
    ])  // run everything inside untill everything inside the array is done
}