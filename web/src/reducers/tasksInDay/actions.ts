import { TasksInDay } from '../../models/Task'

export enum ActionTypes {
  REFRESH_TASKS_IN_DAY = 'REFRESH_TASKS_IN_DAY',
  TOGGLE_TASK = 'TOGGLE_TASK',
  CHANGE_DAY_SELECTED_TO_NEXT_DAY = 'CHANGE_DAY_SELECTED_TO_NEXT_DAY',
  CHANGE_DAY_SELECTED_TO_PREV_DAY = 'CHANGE_DAY_SELECTED_TO_PREV_DAY',
}

export interface ToggleTaskPayload {
  taskId: string
}

export interface RefreshTasksPayload {
  tasksInDay: TasksInDay
}

export interface ActionProps {
  type: ActionTypes
  payload?: RefreshTasksPayload | ToggleTaskPayload
}

export function toggleTaskAction(taskId: string) {
  return {
    type: ActionTypes.TOGGLE_TASK,
    payload: {
      taskId,
    },
  }
}

export function refreshTasksAction(tasksInDay: TasksInDay) {
  return {
    type: ActionTypes.REFRESH_TASKS_IN_DAY,
    payload: {
      tasksInDay,
    },
  }
}

export function changeDaySelectedToNextDayAction() {
  return {
    type: ActionTypes.CHANGE_DAY_SELECTED_TO_NEXT_DAY,
  }
}

export function changeDaySelectedToPrevDayAction() {
  return {
    type: ActionTypes.CHANGE_DAY_SELECTED_TO_PREV_DAY,
  }
}
