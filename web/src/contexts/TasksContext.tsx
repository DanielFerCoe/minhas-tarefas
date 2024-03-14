import { ReactNode, createContext, useEffect, useState } from 'react'
import { startOfDay } from 'date-fns'

import { getTasksInDay } from '../services/task/getTasksInDay'
import { CreateTask, createNewTask } from '../services/task/createNewTask'
import { toggleTask } from '../services/task/toggleTask'

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
  const [tasksInDay, setTasksInDay] = useState<TasksInDay>({
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

    setTasksInDay(tasksInDay)
  }

  async function onAddNewTask({ title, weekDays }: CreateTask) {
    if (!title) {
      return
    }

    const newTask: CreateTask = {
      title,
      weekDays,
    }

    const task = await createNewTask(newTask)

    setTasksInDay((state) => ({
      ...state,
      possibleTasks: [task, ...state.possibleTasks],
    }))
  }

  async function onToggleTask(taskId: string) {
    await toggleTask(taskId)

    const isTaskAlreadyCompleted = tasksInDay?.completedTasks.includes(taskId)

    let completedTasks: string[] = []

    if (isTaskAlreadyCompleted) {
      completedTasks = tasksInDay.completedTasks.filter((id) => id !== taskId)
    } else {
      completedTasks = [...tasksInDay.completedTasks, taskId]
    }

    setTasksInDay((state) => ({
      possibleTasks: state.possibleTasks,
      completedTasks,
    }))
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
