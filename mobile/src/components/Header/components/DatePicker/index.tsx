import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DatePickerContainer,
  Picker,
} from './styles'

export function DatePicker() {
  return (
    <DatePickerContainer>
      <Picker>
        <ArrowLeftIcon size={16} />
      </Picker>
      <Picker>
        <ArrowRightIcon size={16} />
      </Picker>
    </DatePickerContainer>
  )
}
