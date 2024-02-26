import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import styles from './checkbox.module.css'

interface CheckboxProps {
  checked: boolean
  title: string
  hasLineThrough?: boolean
  onCheckedChange: () => void
}

export function Checkbox({ 
  checked, 
  title,
  onCheckedChange,
  hasLineThrough
}: CheckboxProps) {
  const textDecoration = hasLineThrough ? styles.lineThrough : ''

  return (
    <CheckboxRadix.Root
      onCheckedChange={onCheckedChange}
      checked={checked}
      className={styles.checkbox}
    >
      <div className={styles.indicator}>
        <span className={styles.emptyIndicator}/>
        <CheckboxRadix.Indicator>
          <Check size={14} />
        </CheckboxRadix.Indicator>
      </div>
  
      <p className={`${styles.title} ${textDecoration}`}>
        { title }
      </p>
    </CheckboxRadix.Root>
  )
}