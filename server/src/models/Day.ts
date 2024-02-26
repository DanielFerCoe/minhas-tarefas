import { DayTask } from './DayTask'

export interface Day {
  id: string
  date: Date
  dayTasks?: DayTask[]
}
