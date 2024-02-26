import { Day } from '@/models/Day'

export interface DaysRepository {
  create(date: Date): Promise<Day>
  findByDate(date: Date): Promise<Day | null>
}
