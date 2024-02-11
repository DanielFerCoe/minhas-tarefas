import { LucideArrowLeft, LucideArrowRight, Plus } from "lucide-react"
import styles from "./header.module.css"
import { useState } from "react"
import { addDays, format, setDefaultOptions, subDays } from "date-fns"

import { ptBR } from "date-fns/locale"

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
              <button onClick={handlePrevDaySelected}>
                <LucideArrowLeft size={16}/>
              </button>
              <button onClick={handleNextDaySelected}>
                <LucideArrowRight size={16}/>
              </button>
            </div>
          </div>

          <div className={styles.btnAddNewtask}>
            <button onClick={handlePrevDaySelected}>
              <Plus size={14}/>
              <span>Nova tarefa</span>
            </button>
          </div>
        </div>
      </div>

    </header>
  )
}