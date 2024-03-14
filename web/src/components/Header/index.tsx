import { useContext, useState } from 'react'
import { format, setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { TasksContext } from '../../contexts/TasksContext'

import { DatePicker } from './components/DatePicker'
import { AddNewTask } from './components/AddNewTask'
import { ContentContainer, HeaderContainer } from './styles'

setDefaultOptions({
  locale: ptBR,
})

export function Header() {
  const { fetchTasks } = useContext(TasksContext)
  const [daySelected, setDaySelected] = useState(new Date())

  function handleDaySelected(date: Date) {
    setDaySelected(date)
    fetchTasks(date)
  }

  const weekNameSelected = format(daySelected, 'EEEE')
  const dateSelectedFormated = format(daySelected, "dd 'de' MMMM 'de' YYY")

  return (
    <HeaderContainer>
      <div className="wrapper">
        <ContentContainer>
          <span className="title"> {weekNameSelected} </span>
          <span className="date"> {dateSelectedFormated} </span>

          <DatePicker
            daySelected={daySelected}
            handleDaySelected={handleDaySelected}
          />
        </ContentContainer>

        <AddNewTask />
      </div>
    </HeaderContainer>
  )
}
