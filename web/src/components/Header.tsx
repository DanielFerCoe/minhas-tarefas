import { useState } from "react"
import { addDays, format, setDefaultOptions, subDays } from "date-fns"
import * as Dialog from "@radix-ui/react-dialog";

import { LucideArrowLeft, LucideArrowRight, Plus } from "lucide-react"
import styles from "./header.module.css"

import { ptBR } from "date-fns/locale"

import { DialogContent } from "./Dialog";
import { NewTaskForm } from "./NewTaskForm";

export function Header() {
  const [daySelected, setDaySelected] = useState(new Date())

  setDefaultOptions({ 
    locale: ptBR
  })

  function handleNextDaySelected() {
    const nextDay = addDays(daySelected, 1)

    setDaySelected(nextDay)
  }

  function handlePrevDaySelected() {
    const prevDay = subDays(daySelected, 1)

    setDaySelected(prevDay)
  }

  const weekNameSelected = format(daySelected, "EEEE" )
  const dateSelectedFormated = format(daySelected, "dd 'de' MMMM 'de' YYY" )
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <span className={styles.title}> { weekNameSelected } </span>
            <span className={styles.date}> { dateSelectedFormated } </span>

            <div className={styles.buttonsContainer}>
              <button 
                onClick={handlePrevDaySelected}
                className={styles.datesControllers}
              >
                <LucideArrowLeft size={16}/>
              </button>
              <button 
                onClick={handleNextDaySelected}
                className={styles.datesControllers}
              >
                <LucideArrowRight size={16}/>
              </button>
            </div>
          </div>
      
          <Dialog.Root>
            <Dialog.Trigger
              type="button"
              className={styles.btnAddNewtask}
            >
              <Plus size={14} />
              Novo hábito
            </Dialog.Trigger>

            <DialogContent title="Nova tarefa">
              <NewTaskForm />
            </DialogContent>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}