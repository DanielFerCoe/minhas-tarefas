import { useEffect } from 'react'
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Progress, ProgressBarContainer } from './styles'

interface ProgressBarProps {
  progress?: number
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  const sharedProgress = useSharedValue(progress)

  const style = useAnimatedStyle(() => ({
    width: `${sharedProgress.value}%`,
  }))

  useEffect(() => {
    sharedProgress.value = withTiming(progress)
  }, [progress])

  return (
    <ProgressBarContainer>
      <Progress style={style} />
    </ProgressBarContainer>
  )
}
