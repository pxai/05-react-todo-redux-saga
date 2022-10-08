import { TASKS_ACTION_TYPES } from './task.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const selectTasksStart = () => {
    return createAction(TASKS_ACTION_TYPES.SELECT_TASKS_START);
};

export const selectTasksSuccess = (tasks) => {
    return createAction(TASKS_ACTION_TYPES.SELECT_TASKS_SUCCESS, tasks);
};

export const selectTasksError = (error) => {
    return createAction(TASKS_ACTION_TYPES.SELECT_TASKS_ERROR, error);
};

export const addTaskStart = (name) => {
    return createAction(TASKS_ACTION_TYPES.ADD_TASK_START, { name });
};

export const addTaskSuccess = (task) => {
    return createAction(TASKS_ACTION_TYPES.ADD_TASK_SUCCESS, task);
};

export const addTaskError = (error) => {
    return createAction(TASKS_ACTION_TYPES.ADD_TASK_ERROR, error);
};

export const removeTaskStart = (id) => {
    return createAction(TASKS_ACTION_TYPES.REMOVE_TASK_START, {id});
};

export const removeTaskSuccess = (id) => {
    return createAction(TASKS_ACTION_TYPES.REMOVE_TASK_SUCCESS, id);
};

export const removeTaskError = (error) => {
    return createAction(TASKS_ACTION_TYPES.REMOVE_TASK_ERROR, error);
};

export const updateTaskStart = (task) => {
    return createAction(TASKS_ACTION_TYPES.UPDATE_TASK_START, { task });
};

export const updateTaskSuccess = (task) => {
    return createAction(TASKS_ACTION_TYPES.UPDATE_TASK_SUCCESS, task);
};

export const updateTaskError = (error) => {
    return createAction(TASKS_ACTION_TYPES.UPDATE_TASK_ERROR, error);
};

export const searchTask = (name) => {
    return createAction(TASKS_ACTION_TYPES.SEARCH_TASK, name);
};
