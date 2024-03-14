import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { startOfDay } from 'date-fns'

import { getTasksInDay } from '../services/task/getTasksInDay'
import { CreateTask, createNewTask } from '../services/task/createNewTask'
import { toggleTask } from '../services/task/toggleTask'

import { tasksReducer } from '../reducers/cycles/reducer'
import {
  refreshTasksAction,
  toggleTaskAction,
} from '../reducers/cycles/actions'

import { TasksInDay } from '../models/Task'

interface TasksContextProps {
  tasksInDay: TasksInDay
  fetchTasks: (dateSelect: Date) => void
  onAddNewTask: (task: CreateTask) => void
  onToggleTask: (taskId: string) => void
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextProps)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasksInDay, dispatch] = useReducer(tasksReducer, {
    completedTasks: [],
    possibleTasks: [],
  })

  async function fetchTasks(dateSelect?: Date) {
    let searchDate = new Date() // today

    if (dateSelect) {
      searchDate = dateSelect
    }

    const date = startOfDay(searchDate)

    const tasksInDay = await getTasksInDay(date)

    dispatch(refreshTasksAction(tasksInDay))
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

  async function onToggleTask(taskId: string) {
    await toggleTask(taskId)

    dispatch(toggleTaskAction(taskId))
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TasksContext.Provider
      value={{ tasksInDay, fetchTasks, onAddNewTask, onToggleTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}
