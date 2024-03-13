import { Task } from '../../App'

import { Checkbox } from '../Checkbox'
import { TaskContainer } from './styles'

interface TaskProps {
  task: Task
  onToggleTask: () => void
  onDeleteTask: (taskId: string) => void
}

export function TaskComponent({ task, onToggleTask }: TaskProps) {
  return (
    <TaskContainer>
      <Checkbox
        title={task.description}
        checked={task.isChecked}
        onCheckedChange={onToggleTask}
        hasLineThrough
      />
    </TaskContainer>
  )
}
