import { useContext } from 'react'
import { TasksInDayContext } from '../../contexts/TasksInDayContext'

import { ProgressBar } from '../ProgressBar'
import {
  Content,
  Counter,
  InfosTasks,
  Label,
  SummaryTasksContainer,
} from './styles'

export function SummaryTasks() {
  const { tasksInDay } = useContext(TasksInDayContext)

  const tasksAmount = tasksInDay.possibleTasks.length
  const checkedTasksAmount = tasksInDay.completedTasks.length

  const completedPercentage =
    checkedTasksAmount > 0
      ? Math.round((checkedTasksAmount / tasksAmount) * 100)
      : 0

  return (
    <SummaryTasksContainer>
      <ProgressBar progress={completedPercentage} />

      <Content>
        <InfosTasks>
          <Label>Concluídas</Label>
          <Counter
            bold
          >{`${checkedTasksAmount} de ${checkedTasksAmount}`}</Counter>
        </InfosTasks>

        <InfosTasks>
          <Label>Porcentagem</Label>
          <Counter bold>{completedPercentage}%</Counter>
        </InfosTasks>
      </Content>
    </SummaryTasksContainer>
  )
}
