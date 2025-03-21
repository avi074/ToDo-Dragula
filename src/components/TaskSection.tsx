import { Circle, CheckCircle2 } from "lucide-react"
import { Task } from "../types"

interface TaskSectionProps {
  title: "Pending" | "Done"
  tasks: Task[]
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function TaskSection({ title, tasks, containerRef }: TaskSectionProps) {
  const Icon = title === "Pending" ? Circle : CheckCircle2
  const iconColor = title === "Pending" ? "text-yellow-500" : "text-green-500"

  return (
    <div className="bg-white border border-purple-500  rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        {title} ({tasks.length})
      </h2>
      <div ref={containerRef} className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            data-task-id={task.id}
            className={`bg-gray-50 p-4 rounded-lg shadow-sm border border-purple-200 cursor-move hover:shadow-md transition-shadow ${
              title === "Done" ? "line-through text-gray-500" : ""
            }`}
          >
            {task.name}
          </div>
        ))}
      </div>
    </div>
  )
}
