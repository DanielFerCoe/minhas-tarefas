import { useContext } from 'react'
import { TasksContext } from '../../contexts/TasksContext'
import { Header } from '../../components/Header'
import { SummaryTasks } from '../../components/SummaryTasks'
import { Task } from '../../components/Task'
import { EmptyTasks } from './components/EmptyTasks'
import { ListContainer, TasksPageContainer } from './styles'

export function Tasks() {
  const { tasksInDay } = useContext(TasksContext)

  return (
    <TasksPageContainer>
      <Header />
      <main>
        <SummaryTasks />

        <ListContainer>
          {tasksInDay.possibleTasks.length > 0 ? (
            tasksInDay.possibleTasks.map((task) => (
              <Task key={task.id} task={task} onDeleteTask={() => {}} />
            ))
          ) : (
            <EmptyTasks />
          )}
        </ListContainer>
      </main>
    </TasksPageContainer>
  )
}

export default Tasks
