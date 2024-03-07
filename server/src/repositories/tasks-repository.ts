import { Task } from '@/models/Task'

export interface CreateTaskProps {
  title: string
  taskWeekDays: number[]
}

export interface TasksRepository {
  create(data: CreateTaskProps): Promise<Task>
  findById(id: string): Promise<Task | null>
  findByTitle(title: string): Promise<Task | null>
  findManyByWeekDayAndCreatedAt(date: Date, weekDay: number): Promise<Task[]>
}
