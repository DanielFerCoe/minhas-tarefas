import { useState } from "react"

import { Header } from "../../components/Header";
import { SummaryTasks } from "../../components/SummaryTasks";
import { TaskComponent } from "../../components/Task";
import { ListContainer, TasksPageContainer } from "./styles";
import { EmptyTasks } from "./components/EmptyTasks";

export interface Task {
  id: string;
  description: string
  isChecked: boolean
  createdAt: Date
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: crypto.randomUUID(),
      description: "tarefa asd a sasrw asdaw awrwsad asdasdaw asdadsa wdawda aadas awwad ad sadawdwadds asds",
      isChecked: false,
      createdAt: new Date()
    },
    {
      id: crypto.randomUUID(),
      description: "Uma nova tarefa",
      isChecked: false,
      createdAt: new Date()
    },
  ])

  // function handleAddNewTask(task: string) {
  //   if(!task){
  //     return;
  //   }

  //   const newTask: Task = {
  //     id: crypto.randomUUID(),
  //     description: task,
  //     isChecked: false,
  //     createdAt: new Date()
  //   }

  //   setTasks([...tasks, newTask])
  // }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId)

    setTasks(tasksWithoutDeletedOne)
  }

  function handleToggleTask(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if(task.id === taskId) {
        task.isChecked = !task.isChecked
      }

      return task
    })

    setTasks(updatedTasks)
  }

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked === true){
        return prevValue + 1
    }

    return prevValue
  }, 0)

  const completedPercentage = 
    tasks.length > 0 ? Math.round((checkedTasksCounter / tasks.length) * 100) : 0

  return (
    <TasksPageContainer>
      <Header />
      <main>
        <SummaryTasks 
          completedAmount={checkedTasksCounter}
          createdAmount={tasks.length}
          completedPercentage={completedPercentage}
        />
        
        <ListContainer>
          {
            tasks.length > 0 
            ? (
              tasks.map(task => (
                <TaskComponent 
                  key={task.id} 
                  task={task}
                  onToggleTask={() => handleToggleTask(task.id)}
                  onDeleteTask={handleDeleteTask}
                />
              ))
            )
            : (
              <EmptyTasks />
            )
          }
        </ListContainer>
      </main>
    </TasksPageContainer>
  )
}

export default Tasks
