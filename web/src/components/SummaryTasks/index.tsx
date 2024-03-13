import { ProgressBar } from '../ProgressBar'
import { InfosTasks, SummaryTasksContainer } from './styles'

interface InfosTasksProps {
  completedAmount: number
  createdAmount: number
  completedPercentage: number
}

export function SummaryTasks({
  completedAmount,
  createdAmount,
  completedPercentage,
}: InfosTasksProps) {
  return (
    <SummaryTasksContainer>
      <ProgressBar progress={completedPercentage} />

      <div className="wrapper">
        <InfosTasks>
          <span className="label">Concluídas</span>
          <span className="counter">
            {`${completedAmount} de ${createdAmount}`}
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
