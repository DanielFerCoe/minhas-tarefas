import { ProgressBarContainer } from './styles';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <ProgressBarContainer>
      <div
        className='progress'
        role="progressbar"
        aria-label="Progresso de tarefas completadas nesse dia"
        aria-valuenow={props.progress}
        style={{
          width: `${props.progress}%`,
        }}
      />
    </ProgressBarContainer>
  );
}
