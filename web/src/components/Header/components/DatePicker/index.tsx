import { useContext } from 'react'
import { TasksInDayContext } from '../../../../contexts/TasksInDayContext'
import { LucideArrowLeft, LucideArrowRight } from 'lucide-react'
import { DatePickerContainer } from './styles'

export function DatePicker() {
  const { onChangeDaySelected } = useContext(TasksInDayContext)

  function handleNextDaySelected() {
    onChangeDaySelected('nextDay')
  }

  function handlePrevDaySelected() {
    onChangeDaySelected('prevDay')
  }

  return (
    <DatePickerContainer>
      <button onClick={handlePrevDaySelected}>
        <LucideArrowLeft size={16} />
      </button>
      <button onClick={handleNextDaySelected}>
        <LucideArrowRight size={16} />
      </button>
    </DatePickerContainer>
  )
}
