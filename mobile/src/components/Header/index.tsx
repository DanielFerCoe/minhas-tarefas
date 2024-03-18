import { useState } from 'react'
import { format, setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { DateDisplay, HeaderContainer, WeekName } from './styles'
import { DatePicker } from './components/DatePicker'

setDefaultOptions({
  locale: ptBR,
})

export function Header() {
  const [daySelected, setDaySelected] = useState<Date>(new Date())

  const weekNameSelected = format(daySelected, 'EEEE')
  const dateSelectedFormated = format(daySelected, "dd 'de' MMMM 'de' yyy")

  return (
    <HeaderContainer>
      <WeekName>{weekNameSelected}</WeekName>
      <DateDisplay>{dateSelectedFormated}</DateDisplay>

      <DatePicker />
    </HeaderContainer>
  )
}
