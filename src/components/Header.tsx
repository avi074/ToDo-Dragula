import { ListTodo } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <ListTodo className="w-8 h-8 text-purple-600" />
      <h1 className="text-3xl font-bold text-gray-800">ToDo Lists</h1>
    </div>
  );
}