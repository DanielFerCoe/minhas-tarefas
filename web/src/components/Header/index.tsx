import { useContext } from 'react'
import { format, setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { TasksInDayContext } from '../../contexts/TasksInDayContext'

import { AddNewTask } from './components/AddNewTask'
import { ContentContainer, HeaderContainer } from './styles'
import { DatePicker } from './components/DatePicker'

setDefaultOptions({
  locale: ptBR,
})

export function Header() {
  const { tasksInDay } = useContext(TasksInDayContext)

  const weekNameSelected = format(tasksInDay.daySelected, 'EEEE')
  const dateSelectedFormated = format(
    tasksInDay.daySelected,
    "dd 'de' MMMM 'de' YYY",
  )

  return (
    <HeaderContainer>
      <div className="wrapper">
        <ContentContainer>
          <span className="title"> {weekNameSelected} </span>
          <span className="date"> {dateSelectedFormated} </span>

          <DatePicker />
        </ContentContainer>

        <AddNewTask />
      </div>
    </HeaderContainer>
  )
}
