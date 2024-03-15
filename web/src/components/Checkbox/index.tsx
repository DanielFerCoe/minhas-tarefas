import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { CheckboxContainer } from './styles'

interface CheckboxProps {
  checked: boolean
  disabled?: boolean
  title: string
  hasLineThrough?: boolean
  onCheckedChange: () => void
}

export function Checkbox({
  checked,
  disabled,
  title,
  onCheckedChange,
  hasLineThrough,
}: CheckboxProps) {
  return (
    <CheckboxRadix.Root
      onCheckedChange={!disabled ? onCheckedChange : () => {}}
      checked={checked}
      disabled={disabled}
      asChild
    >
      <CheckboxContainer>
        <div className="indicator">
          <span className="emptyIndicator" />
          <CheckboxRadix.Indicator>
            <Check size={14} />
          </CheckboxRadix.Indicator>
        </div>

        <p className={`title ${hasLineThrough ? 'lineThrough' : ''}`}>
          {title}
        </p>
      </CheckboxContainer>
    </CheckboxRadix.Root>
  )
}
