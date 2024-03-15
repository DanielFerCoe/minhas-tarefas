import * as Dialog from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'

import { NewTaskForm } from '../../../NewTaskForm'
import { DialogComponent } from '../../../Dialog'
import { AddNewTaskButton } from './styles'

export function AddNewTask() {
  return (
    <Dialog.Root>
      <Dialog.Trigger type="button" asChild>
        <AddNewTaskButton>
          <Plus size={14} />
          Nova tarefa
        </AddNewTaskButton>
      </Dialog.Trigger>

      <DialogComponent title="Nova tarefa">
        <NewTaskForm />
      </DialogComponent>
    </Dialog.Root>
  )
}
