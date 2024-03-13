import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { CheckboxContainer } from './styles'

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
  hasLineThrough,
}: CheckboxProps) {
  return (
    <CheckboxContainer>
      <CheckboxRadix.Root onCheckedChange={onCheckedChange} checked={checked}>
        <div className="indicator">
          <span className="emptyIndicator" />
          <CheckboxRadix.Indicator>
            <Check size={14} />
          </CheckboxRadix.Indicator>
        </div>

        <p className={`title ${hasLineThrough ? 'lineThrough' : ''}`}>
          {title}
        </p>
      </CheckboxRadix.Root>
    </CheckboxContainer>
  )
}
