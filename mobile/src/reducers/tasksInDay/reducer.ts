import { addDays, subDays } from 'date-fns'
import { Task } from '../../models/Task'
import {
  ActionProps,
  ActionTypes,
  RefreshTasksPayload,
  ToggleTaskPayload,
} from './actions'

export interface TasksInDayState {
  daySelected: Date
  possibleTasks: Task[]
  completedTasks: string[]
}

export function tasksReducer(state: TasksInDayState, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.REFRESH_TASKS_IN_DAY:
      const refreshTasksInDayPayload = action.payload as RefreshTasksPayload

      return {
        ...state,
        ...refreshTasksInDayPayload.tasksInDay,
      }
    case ActionTypes.TOGGLE_TASK:
      const toggleTaskPayload = action.payload as ToggleTaskPayload

      const { taskId } = toggleTaskPayload

      const isTaskAlreadyCompleted = state.completedTasks.includes(taskId)

      let completedTasks: string[] = []

      if (isTaskAlreadyCompleted) {
        completedTasks = state.completedTasks.filter((id) => id !== taskId)
      } else {
        completedTasks = [...state.completedTasks, taskId]
      }

      return {
        ...state,
        completedTasks,
      }
    case ActionTypes.CHANGE_DAY_SELECTED_TO_NEXT_DAY:
      const nextDay = addDays(state.daySelected, 1)

      return {
        ...state,
        daySelected: nextDay,
      }
    case ActionTypes.CHANGE_DAY_SELECTED_TO_PREV_DAY:
      const prevDay = subDays(state.daySelected, 1)

      return {
        ...state,
        daySelected: prevDay,
      }
  }
}
