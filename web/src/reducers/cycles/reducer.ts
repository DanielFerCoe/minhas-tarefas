import { Task } from '../../models/Task'
import {
  ActionProps,
  ActionTypes,
  RefreshTasksPayload,
  ToggleTaskPayload,
} from './actions'

export interface TasksState {
  possibleTasks: Task[]
  completedTasks: string[]
}

export function tasksReducer(state: TasksState, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.REFRESH_TASKS_IN_DAY:
      const refreshTasksInDayPayload = action.payload as RefreshTasksPayload

      return {
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
  }
}
