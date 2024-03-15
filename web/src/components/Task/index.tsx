import { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Trash2 } from 'lucide-react'
import { TasksInDayContext } from '../../contexts/TasksInDayContext'

import { Checkbox } from '../Checkbox'
import { DeleteButton, DialogContainer, TaskContainer } from './styles'
import { Task as TaskType } from '../../models/Task'
import { DialogComponent } from '../Dialog'
import { endOfDay, isAfter, isBefore } from 'date-fns'

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
        onCheckedChange={handleToggleTask}
        disabled={isDisabled}
        hasLineThrough
      />

      {isEnabled && (
        <Dialog.Root>
          <Dialog.Trigger type="button" asChild>
            <DeleteButton
              disabled={isChecked}
              title={isChecked ? 'Para excluir desmarque a tarefa!' : ''}
            >
              <Trash2 size={20} />
            </DeleteButton>
          </Dialog.Trigger>

          <DialogComponent title="Excluir Tarefa">
            <DialogContainer>
              <span>
                Você não perderá os dados das tarefas dos dias anteriores e elas
                não serão mais exibidas no futuro.
              </span>

              <button onClick={handleDeleteTask}>
                <Trash2 size={18} />
                Excluir
              </button>
            </DialogContainer>
          </DialogComponent>
        </Dialog.Root>
      )}
    </TaskContainer>
  )
}
