import React, { useContext } from 'react'

import { TaskContainer } from './styles'
import { TasksInDayContext } from '../../contexts/TasksInDayContext'
import { Task as TaskType } from '../../models/Task'
import { endOfDay, isAfter, isBefore } from 'date-fns'
import { Checkbox } from '../Checkbox'
import { Alert } from 'react-native'

interface TaskProps {
  task: TaskType
  onDeleteTask: (taskId: string) => void
}

export function Task({ task }: TaskProps) {
  const { tasksInDay, onToggleTask, onDeleteTask } =
    useContext(TasksInDayContext)

  const isChecked = tasksInDay.completedTasks.includes(task.id)

  function handleToggleTask() {
    onToggleTask(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  const today = endOfDay(new Date())
  const day = endOfDay(tasksInDay.daySelected)

  const isDateInPast = isBefore(day, today)
  const isDateInFuture = isAfter(day, today)

  const isDisabled = isDateInFuture || isDateInPast
  const isEnabled = !isDisabled

  return (
    <TaskContainer>
      <Checkbox
        title={task.title}
        checked={isChecked}
        onPress={
          isEnabled
            ? handleToggleTask
            : () =>
                Alert.alert(
                  'ops',
                  'Não é possivel editar tarefas de dias passados ou futuros',
                )
        }
        disabled={isDisabled}
      />
    </TaskContainer>
  )
}
