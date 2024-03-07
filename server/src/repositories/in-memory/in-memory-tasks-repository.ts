import { randomUUID } from 'node:crypto'
import { TaskWeekDays } from '@prisma/client'
import { CreateTaskProps, TasksRepository } from './../tasks-repository'
import { Task } from '@/models/Task'

export class InMemoryTasksRepository implements TasksRepository {
  public tasks: Task[] = []
  public taskWeekDays: TaskWeekDays[] = []

  async findById(id: string) {
    const task = this.tasks.find((task) => task.id === id)

    return task || null
  }

  async findByTitle(title: string) {
    const task = this.tasks.find((task) => task.title === title)

    return task || null
  }

  async findManyByWeekDayAndCreatedAt(date: Date, weekDay: number) {
    const tasksInWeekDay = this.taskWeekDays.filter(
      (taskWeekDay) => taskWeekDay.week_day === weekDay,
    )

    const tasksIds = tasksInWeekDay.map((taskWeekDay) => taskWeekDay.task_id)

    const tasksFiltered = this.tasks.filter((task) => {
      return task.created_at <= date && tasksIds.includes(task.id)
    })

    return tasksFiltered || []
  }

  async create(data: CreateTaskProps) {
    const newTask: Task = {
      id: randomUUID(),
      title: data.title,
      created_at: new Date(),
    }

    this.tasks.push(newTask)

    for (const taskWeekDay of data.taskWeekDays) {
      const newTaskWeekDay: TaskWeekDays = {
        id: randomUUID(),
        task_id: newTask.id,
        week_day: taskWeekDay,
      }

      this.taskWeekDays.push(newTaskWeekDay)
    }

    return newTask
  }
}
