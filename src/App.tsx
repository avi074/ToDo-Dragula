import { useState, useEffect, useRef } from "react"
import "dragula"
// import "dragula/dist/dragula.css";
import { Task } from "./types"
import { Header } from "./components/Header"
import { TaskInput } from "./components/TaskInput"
import { TaskSection } from "./components/TaskSection"
import * as dragula from "dragula"

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: "1", name: "Task 1", status: "pending" },
          { id: "2", name: "Task 2", status: "done" },
        ]
  })
  const [newTask, setNewTask] = useState("")

  const pendingContainer = useRef<HTMLDivElement>(null)
  const doneContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // useEffect(() => {
  //   if (pendingContainer.current && doneContainer.current) {
  //     const drake = dragula([pendingContainer.current, doneContainer.current], {
  //       moves: (el, container, handle) =>
  //         !handle?.classList.contains("no-drag"),
  //     })

  //     drake.on("drop", (el, target) => {
  //       const taskId = el.getAttribute("data-task-id")
  //       if (!taskId) return

  //       const newStatus = target === doneContainer.current ? "done" : "pending"

  //       setTasks((prev) =>
  //         prev.map((task) =>
  //           task.id === taskId ? { ...task, status: newStatus } : task
  //         )
  //       )

  //       target.appendChild(el) // Force re-render
  //     })

  //     return () => drake.destroy()
  //   }
  // }, [])

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTask.trim()) return

    const task: Task = {
      id: Date.now().toString(),
      name: newTask.trim(),
      status: "pending",
    }

    setTasks((prev) => [...prev, task])
    setNewTask("")
  }

  const pendingTasks = tasks.filter((task) => task.status === "pending")
  const doneTasks = tasks.filter((task) => task.status === "done")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <Header />
          <TaskInput
            newTask={newTask}
            setNewTask={setNewTask}
            onAddTask={handleAddTask}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TaskSection
              title="Pending"
              tasks={pendingTasks}
              containerRef={pendingContainer}
            />
            <TaskSection
              title="Done"
              tasks={doneTasks}
              containerRef={doneContainer}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
