import { Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Tasks />}/>
    </Routes>
  )
}