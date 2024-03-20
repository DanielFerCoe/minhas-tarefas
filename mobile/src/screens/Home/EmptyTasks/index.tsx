import { ClipboardList } from 'lucide-react-native'
import { Content, Description, EmptyTasksContainer } from './styles'

import { defaultTheme } from '../../../styles/themes/default'

export function EmptyTasks() {
  return (
    <EmptyTasksContainer>
      <ClipboardList size={46} color={defaultTheme['gray-100']} />

      <Content>
        <Description>Você ainda não tem tarefas cadastradas</Description>
        <Description>Crie tarefas e organize seu dia</Description>
      </Content>
    </EmptyTasksContainer>
  )
}
