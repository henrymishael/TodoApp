import { TaskCounterProps } from "@/types";

export default function TaskCounter({
  totalTasks,
  remainingTasks,
}: TaskCounterProps) {
  if (totalTasks === 0) return null;

  return (
    <div className='mb-6 text-center'>
      <span className='text-gray-600'>
        {remainingTasks} of {totalTasks} tasks remaining
      </span>
    </div>
  );
}
