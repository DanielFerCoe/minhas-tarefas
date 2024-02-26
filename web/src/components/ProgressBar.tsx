import styles from './progressBar.module.css'

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progress}
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        style={{
          width: `${props.progress}%`,
        }}
      ></div>
    </div>
  );
}
