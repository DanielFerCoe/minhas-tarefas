import { useContext } from 'react'
import { ScrollView } from 'react-native'

import { Header } from '../../components/Header'
import { TasksInDayContext } from '../../contexts/TasksInDayContext'
import { Task } from '../../components/Task'
import { SummaryTasks } from '../../components/SummaryTasks'
import { Loading } from '../../components/Loading'
import { Content, HomeContainer, TasksContainer } from './styles'
import { EmptyTasks } from './EmptyTasks'

export function Home() {
  const { tasksInDay, isLoading } = useContext(TasksInDayContext)

  return (
    <HomeContainer>
      <Header />
      <Content>
        <SummaryTasks />

        {isLoading ? (
          <Loading align="flex-start" />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 32 }}
          >
            <TasksContainer>
              {tasksInDay.possibleTasks.length > 0 ? (
                tasksInDay.possibleTasks.map((task) => (
                  <Task key={task.id} task={task} onDeleteTask={() => {}} />
                ))
              ) : (
                <EmptyTasks />
              )}
            </TasksContainer>
          </ScrollView>
        )}
      </Content>
    </HomeContainer>
  )
}
