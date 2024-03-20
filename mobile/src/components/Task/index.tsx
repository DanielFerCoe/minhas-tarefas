import React, { useContext } from 'react'
import { Alert } from 'react-native'

import { DeleteIconButton, TaskContainer } from './styles'
import { TasksInDayContext } from '../../contexts/TasksInDayContext'
import { Task as TaskType } from '../../models/Task'
import { endOfDay, isAfter, isBefore } from 'date-fns'
import { Checkbox } from '../Checkbox'
import { Trash2 } from 'lucide-react-native'
import { defaultTheme } from '../../styles/themes/default'

interface TaskProps {
  task: TaskType
  onDeleteTask: (taskId: string) => void
}

export function Task({ task }: TaskProps) {
  const { tasksInDay, onToggleTask, onDeleteTask } =
    useContext(TasksInDayContext)

  const isChecked = tasksInDay.completedTasks.includes(task.id)

  const today = endOfDay(new Date())
  const day = endOfDay(tasksInDay.daySelected)

  const isDateInPast = isBefore(day, today)
  const isDateInFuture = isAfter(day, today)

  const isDisabled = isDateInFuture || isDateInPast
  const isEnabled = !isDisabled

  function handleToggleTask() {
    if (isEnabled) {
      onToggleTask(task.id)
    } else {
      Alert.alert(
        'Ops!!',
        'Não é possivel editar tarefas de dias passados ou futuros',
      )
    }
  }

  function handleDeleteTask() {
    if (isChecked) {
      Alert.alert('Ops!!', 'Para excluir desmarque a tarefa!')
    } else {
      Alert.alert(
        'Excluir tarefa',
        'Você não perderá os dados das tarefas dos dias anteriores e elas não serão mais exibidas no futuro.',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          { text: 'OK', onPress: () => onDeleteTask(task.id) },
        ],
        { cancelable: false },
      )
    }
  }

  return (
    <TaskContainer>
      <Checkbox
        title={task.title}
        checked={isChecked}
        lineThrough
        onPress={handleToggleTask}
        disabled={isDisabled}
      />

      {isEnabled && (
        <DeleteIconButton onPress={handleDeleteTask}>
          <Trash2
            size={18}
            color={
              isChecked ? defaultTheme['gray-400'] : defaultTheme['gray-300']
            }
          />
        </DeleteIconButton>
      )}
    </TaskContainer>
  )
}
