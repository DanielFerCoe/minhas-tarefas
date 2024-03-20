import { useContext } from 'react'
import { TasksInDayContext } from '../../../../contexts/TasksInDayContext'

import { DatePickerContainer } from './styles'
import { ButtonWithIcon } from '../../../ButtonWithIcon'

export function DatePicker() {
  const { onChangeDaySelected } = useContext(TasksInDayContext)

  function handlePrevDaySelected() {
    onChangeDaySelected('prevDay')
  }

  function handleNextDaySelected() {
    onChangeDaySelected('nextDay')
  }

  return (
    <DatePickerContainer>
      <ButtonWithIcon icon="arrow-left" onPress={handlePrevDaySelected} />
      <ButtonWithIcon icon="arrow-right" onPress={handleNextDaySelected} />
    </DatePickerContainer>
  )
}
