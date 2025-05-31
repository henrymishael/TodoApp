import { TaskListProps } from "@/types";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className='text-center py-12 text-gray-500'>
        <div className='text-6xl mb-4'>📝</div>
        <p>No tasks yet. Add one above to get started!</p>
      </div>
    );
  }

  return (
    <div className='space-y-3'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
