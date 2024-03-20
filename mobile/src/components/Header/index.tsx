import { useContext } from 'react'
import { format, setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { TasksInDayContext } from '../../contexts/TasksInDayContext'

import { DatePicker } from './components/DatePicker'
import {
  AddButton,
  Content,
  DateDisplay,
  HeaderContainer,
  WeekName,
  Wrapper,
} from './styles'

setDefaultOptions({
  locale: ptBR,
})

export function Header() {
  const { tasksInDay } = useContext(TasksInDayContext)

  const weekNameSelected = format(tasksInDay.daySelected, 'EEEE')
  const dateSelectedFormated = format(
    tasksInDay.daySelected,
    "dd 'de' MMMM 'de' yyy",
  )

  return (
    <HeaderContainer>
      <Wrapper>
        <Content>
          <WeekName bold>{weekNameSelected}</WeekName>
          <DateDisplay>{dateSelectedFormated}</DateDisplay>
        </Content>

        <AddButton />
      </Wrapper>

      <DatePicker />
    </HeaderContainer>
  )
}
