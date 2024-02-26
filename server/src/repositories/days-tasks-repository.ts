import { DayTask } from '@/models/DayTask'

export interface DayTaskProps {
  dayId: string
  taskId: string
}

export interface DaysTasksRepository {
  findByDayIdAndTaskId({ dayId, taskId }: DayTaskProps): Promise<DayTask | null>
  findManyByDayId(dayId: string): Promise<DayTask[]>
  create(data: DayTaskProps): Promise<DayTask>
  delete(id: string): Promise<void>
}
