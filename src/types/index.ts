export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface AddTaskFormProps {
  onAddTask: (text: string) => void;
}

export interface TaskCounterProps {
  totalTasks: number;
  remainingTasks: number;
}

export interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}
