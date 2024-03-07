import { FormEvent, useState } from "react";
import { Check } from "lucide-react";
import { Checkbox } from "./Checkbox";

import styles from "./newTaskForm.module.css"

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function NewTaskForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return;
    }

    setTitle("");
    setWeekDays([]);

    alert("Hábito criado com sucesso!");
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay);

      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay];

      setWeekDays(weekDaysWithAddedOne);
    }
  }

  return (
    <form onSubmit={createNewHabit} className={styles.newTaskForm}>
      <label htmlFor="title">
        Qual a tarefa?
      </label>
      <input
        type="text"
        id="title"
        placeholder="ex: Estudar, fazer exercício, etc..."
        autoFocus
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />

      <label htmlFor="title">
        Quais dias?
      </label>
      <div className={styles.wrapperCheckbox}>
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox 
            key={weekDay}
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
            title={weekDay}
          />
        ))}
      </div>

      <button
        type="submit"
      >
        <Check size={20} />
        Confirmar
      </button>
    </form>
  )
}