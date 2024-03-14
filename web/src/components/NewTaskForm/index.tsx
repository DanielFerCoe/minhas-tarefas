import { FormEvent, useContext, useState } from 'react'
import { Check } from 'lucide-react'
import { TasksContext } from '../../contexts/TasksContext'

import { Checkbox } from '../Checkbox'
import { CheckboxsContainer, FormContainer, Submit } from './styles'
import { availableWeekDays } from './availableWeekDays'

export function NewTaskForm() {
  const { onAddNewTask } = useContext(TasksContext)
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  async function createNewTask(event: FormEvent) {
    event.preventDefault()

    if (!title || weekDays.length === 0) {
      return
    }

    setTitle('')
    setWeekDays([])

    onAddNewTask({
      title,
      weekDays,
    })

    alert('Hábito criado com sucesso!')
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay)

      setWeekDays(weekDaysWithRemovedOne)
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay]

      setWeekDays(weekDaysWithAddedOne)
    }
  }

  return (
    <FormContainer onSubmit={createNewTask}>
      <label htmlFor="title">Qual a tarefa?</label>
      <input
        type="text"
        id="title"
        placeholder="ex: Estudar, fazer exercício, etc..."
        autoFocus
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />

      <label htmlFor="title">Quais dias?</label>
      <CheckboxsContainer>
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox
            key={weekDay}
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
            title={weekDay}
          />
        ))}
      </CheckboxsContainer>

      <Submit>
        <Check size={20} />
        Confirmar
      </Submit>
    </FormContainer>
  )
}
