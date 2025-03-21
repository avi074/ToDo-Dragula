import { PlusCircle } from 'lucide-react';

interface TaskInputProps {
  newTask: string;
  setNewTask: (task: string) => void;
  onAddTask: (e: React.FormEvent) => void;
}

export function TaskInput({ newTask, setNewTask, onAddTask }: TaskInputProps) {
  return (
    <form onSubmit={onAddTask} className="mb-8">
      <div className="flex gap-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <PlusCircle className="w-5 h-5" />
          Add Task
        </button>
      </div>
    </form>
  );
}