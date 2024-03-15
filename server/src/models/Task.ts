export interface Task {
  id: string
  title: string
  created_at: Date
  deleted_at: Date | null
}
