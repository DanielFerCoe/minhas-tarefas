import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import styles from './checkbox.module.css'

interface CheckboxProps {
  checked: boolean
  title: string
  id: string
  onCheckedChange: (id: string) => void
}

export function Checkbox({ checked, title, id,  onCheckedChange }: CheckboxProps) {
  return (
    <CheckboxRadix.Root
      onCheckedChange={() => onCheckedChange(id)}
      checked={checked}
      // disabled={isDateinPast}
      className={styles.checkbox}
    >
      <div className={styles.indicator}>
        <span className={styles.emptyIndicator}/>
        <CheckboxRadix.Indicator>
          <Check size={14} />
        </CheckboxRadix.Indicator>
      </div>

  
      <p className={styles.title}>
        { title }
      </p>
    </CheckboxRadix.Root>
  )
}