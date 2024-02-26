import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import styles from './dialog.module.css'

interface DialogContentProps {
  title: string
  children: React.ReactNode
}

export function DialogContent({ title, children }: DialogContentProps){
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.dialogWrapper} />
      <Dialog.Content className={styles.dialogContent}>
        <Dialog.Close className={styles.dialogClose}>
          <X size={24} aria-label="Fechar" />
        </Dialog.Close>

        <Dialog.Title className={styles.dialogTitle}>
          { title }
        </Dialog.Title>

        { children }
      </Dialog.Content>
    </Dialog.Portal>
  )
}