import * as Dialog from '@radix-ui/react-dialog'

import { NewTaskForm } from '../../../NewTaskForm'
import { DialogComponent } from '../../../Dialog'
import { Plus } from 'lucide-react'
import { AddNewTaskContainer } from './styles'

export function AddNewTask() {
  return (
    <AddNewTaskContainer>
      <Dialog.Root>
        <Dialog.Trigger type="button">
          <Plus size={14} />
          Novo hábito
        </Dialog.Trigger>

        <DialogComponent title="Nova tarefa">
          <NewTaskForm />
        </DialogComponent>
      </Dialog.Root>
    </AddNewTaskContainer>
  )
}
