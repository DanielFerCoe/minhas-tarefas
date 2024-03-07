import { Check, Trash2 } from "lucide-react"

import { Task } from "../App"

import styles from "./task.module.css"
import { Checkbox } from "./Checkbox"

interface TaskProps {
  task: Task
  onToggleTask: () => void
  onDeleteTask: (taskId: string) => void
}

export function TaskComponent({ task, onToggleTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <Checkbox 
          title={task.description} 
          checked={task.isChecked}
          onCheckedChange={onToggleTask}
          hasLineThrough
        />
      </div>
    </div>
  )
}