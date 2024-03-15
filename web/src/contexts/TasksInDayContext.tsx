import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { startOfDay } from 'date-fns'

import { getTasksInDay } from '../services/task/getTasksInDay'
import { CreateTask, createNewTask } from '../services/task/createNewTask'
import { toggleTask } from '../services/task/toggleTask'

import { TasksInDayState, tasksReducer } from '../reducers/tasksInDay/reducer'
import {
  changeDaySelectedToNextDayAction,
  changeDaySelectedToPrevDayAction,
  refreshTasksAction,
  toggleTaskAction,
} from '../reducers/tasksInDay/actions'

import { deleteTask } from '../services/task/deleteNewTask'

interface TasksInDayContextProps {
  tasksInDay: TasksInDayState
  fetchTasks: (dateSelect: Date) => void
  onAddNewTask: (task: CreateTask) => void
  onToggleTask: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
  onChangeDaySelected: (type: 'nextDay' | 'prevDay') => void
}

interface TasksInDayProviderProps {
  children: ReactNode
}

export const TasksInDayContext = createContext({} as TasksInDayContextProps)

export function TasksInDayProvider({ children }: TasksInDayProviderProps) {
  const [tasksInDay, dispatch] = useReducer(tasksReducer, {
    daySelected: new Date(),
    completedTasks: [],
    possibleTasks: [],
  })

  async function fetchTasks() {
    const date = startOfDay(tasksInDay.daySelected)
    const tasksInDayResponse = await getTasksInDay(date)

    dispatch(refreshTasksAction(tasksInDayResponse))
  }

  async function onAddNewTask({ title, weekDays }: CreateTask) {
    if (!title) {
      return
    }

    const newTask: CreateTask = {
      title,
      weekDays,
    }

    await createNewTask(newTask)

    fetchTasks()
  }

  async function onDeleteTask(taskId: string) {
    await deleteTask(taskId)
    fetchTasks()
  }

  async function onToggleTask(taskId: string) {
    await toggleTask(taskId)
    dispatch(toggleTaskAction(taskId))
  }

  async function onChangeDaySelected(type: 'nextDay' | 'prevDay') {
    if (type === 'nextDay') {
      dispatch(changeDaySelectedToNextDayAction())
    } else {
      dispatch(changeDaySelectedToPrevDayAction())
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [tasksInDay.daySelected])

  return (
    <TasksInDayContext.Provider
      value={{
        tasksInDay,
        fetchTasks,
        onAddNewTask,
        onToggleTask,
        onDeleteTask,
        onChangeDaySelected,
      }}
    >
      {children}
    </TasksInDayContext.Provider>
  )
}
