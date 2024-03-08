import { ClipboardList } from "lucide-react";
import { EmptyTasksContainer } from "./styles";

export function EmptyTasks() {
  return (
    <EmptyTasksContainer>
      <ClipboardList size={56}/>

      <div className='infoContainer'>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seu dia</p>
      </div>
    </EmptyTasksContainer>
  )
}