export interface Task {
  id: string
  title: string
  created_at: Date
}

export interface TasksInDay {
  possibleTasks: Task[]
  completedTasks: string[]
}
