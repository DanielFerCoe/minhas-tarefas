import { useContext } from 'react'
import { TasksContext } from '../../contexts/TasksContext'

import { Checkbox } from '../Checkbox'
import { TaskContainer } from './styles'
import { Task as TaskType } from '../../models/Task'

interface TaskProps {
  task: TaskType
  onDeleteTask: (taskId: string) => void
}

export function Task({ task }: TaskProps) {
  const { tasksInDay, onToggleTask } = useContext(TasksContext)

  const isChecked = tasksInDay.completedTasks.includes(task.id)

  function handleToggleTask() {
    onToggleTask(task.id)
  }

  return (
    <TaskContainer>
      <Checkbox
        title={task.title}
        checked={isChecked}
        onCheckedChange={handleToggleTask}
        hasLineThrough
      />
    </TaskContainer>
  )
}
