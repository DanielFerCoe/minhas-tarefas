import { ProgressBar } from "./ProgressBar"
import styles from "./summaryTasks.module.css"

interface InfosTasksProps {
  completedAmount: number
  createdAmount: number
  completedPercentage: number
}

export function SummaryTasks({ 
  completedAmount, 
  createdAmount, 
  completedPercentage 
}: InfosTasksProps) {
  return (
    <header className={styles.headerTasks}>
      <ProgressBar progress={completedPercentage}/>

      <div className={styles.wrapperContent}>
        <div className={styles.infosTask}>
          <span>
            Concluídas
          </span> 
          <span className={styles.counter}>
            { `${completedAmount} de ${createdAmount}`}
          </span>
        </div>
        <div className={styles.infosTask}>
          <span>
            Porcentagem
          </span> 
          <span className={styles.counter}>
            { completedPercentage }%
          </span>
        </div>
      </div>
    </header>
  )
}