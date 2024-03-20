import { useContext, useState } from 'react'
import { ScrollView, Alert } from 'react-native'
import { Check } from 'lucide-react-native'

import { BackButton } from '../../components/BackButton'
import { Checkbox } from '../../components/Checkbox'
import {
  Label,
  NewContainer,
  SubmitButton,
  TextInput,
  Title,
  Header,
  CheckboxsContainer,
} from './styles'
import { Text } from '../../components/Text'
import { TasksInDayContext } from '../../contexts/TasksInDayContext'
import { defaultTheme } from '../../styles/themes/default'

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function New() {
  const { onAddNewTask } = useContext(TasksInDayContext)

  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])
  const [isFocused, setIsFocused] = useState<boolean>(false)

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex),
      )
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex])
    }
  }

  async function handleCreateNewTask() {
    try {
      if (!title.trim() || weekDays.length === 0) {
        return Alert.alert('Novo tarefa', 'Informe a tarefa e escolha os dias.')
      }

      onAddNewTask({
        title,
        weekDays,
      })

      setTitle('')
      setWeekDays([])

      Alert.alert('Nova tarefa', 'Tarefa criada com sucesso!')
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível criar a nova tarefa')
    }
  }

  return (
    <NewContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Header>
          <BackButton />
          <Title>Criar tarefa</Title>
        </Header>

        <Label>Qual a tarefa?</Label>

        <TextInput
          placeholder="ex: Estudar, fazer exercício, etc..."
          placeholderTextColor={defaultTheme['gray-300']}
          style={isFocused && { borderColor: defaultTheme['purple-500'] }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={setTitle}
          value={title}
        />

        <Label>Quais dias?</Label>

        <CheckboxsContainer>
          {availableWeekDays.map((weekDay, index) => (
            <Checkbox
              key={weekDay}
              title={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDay(index)}
            />
          ))}
        </CheckboxsContainer>

        <SubmitButton activeOpacity={0.7}>
          <Check color={defaultTheme['gray-100']} size={20} />
          <Text onPress={handleCreateNewTask}>Confirmar</Text>
        </SubmitButton>
      </ScrollView>
    </NewContainer>
  )
}
