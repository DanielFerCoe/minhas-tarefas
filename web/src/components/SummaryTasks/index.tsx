import { useContext } from 'react'
import { TasksContext } from '../../contexts/TasksContext'

import { ProgressBar } from '../ProgressBar'
import { InfosTasks, SummaryTasksContainer } from './styles'

export function SummaryTasks() {
  const { tasksInDay } = useContext(TasksContext)

  const tasksAmount = tasksInDay.possibleTasks.length
  const checkedTasksAmount = tasksInDay.completedTasks.length

  const completedPercentage =
    checkedTasksAmount > 0
      ? Math.round((checkedTasksAmount / tasksAmount) * 100)
      : 0

  return (
    <SummaryTasksContainer>
      <ProgressBar progress={completedPercentage} />

      <div className="wrapper">
        <InfosTasks>
          <span className="label">Concluídas</span>
          <span className="counter">
            {`${checkedTasksAmount} de ${checkedTasksAmount}`}
          </span>
        </InfosTasks>
        <InfosTasks>
          <span className="label">Porcentagem</span>
          <span className="counter">{completedPercentage}%</span>
        </InfosTasks>
      </div>
    </SummaryTasksContainer>
  )
}
