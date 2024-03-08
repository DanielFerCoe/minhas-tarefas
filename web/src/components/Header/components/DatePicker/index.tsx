import { LucideArrowLeft, LucideArrowRight } from "lucide-react";
import { DatePickerContainer } from "./styles";
import { addDays, subDays } from "date-fns";

interface DatePickerProps {
  daySelected: Date
  handleDaySelected: (date: Date) => void
}

export function DatePicker({ daySelected, handleDaySelected }: DatePickerProps) {
  function handleNextDaySelected() {
    const nextDay = addDays(daySelected, 1)
    handleDaySelected(nextDay)
  }

  function handlePrevDaySelected() {
    const prevDay = subDays(daySelected, 1)
    handleDaySelected(prevDay)
  }

  return (
    <DatePickerContainer>
      <button 
        onClick={handlePrevDaySelected}
      >
        <LucideArrowLeft size={16}/>
      </button>
      <button 
        onClick={handleNextDaySelected}
      >
        <LucideArrowRight size={16}/>
      </button>
    </DatePickerContainer>
  )
}