"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Task } from "@/types";
import AddTaskForm from "@/components/AddTaskForm";
import TaskCounter from "@/components/TaskCounter";
import TaskList from "@/components/TaskList";
import { useLocalStorage } from "@/hooks/useLocaStorage";

export default function HomePage() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

    toast.success(
      task.completed ? "Task marked as incomplete" : "Task completed"
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.success("Task deleted");
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-md mx-auto py-8 px-4'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-black mb-2'>Todo App</h1>
          <p className='text-gray-600'>Stay organized, stay productive</p>
        </div>

        {/* Add Task Form */}
        <AddTaskForm onAddTask={addTask} />

        {/* Task Counter */}
        <TaskCounter
          totalTasks={tasks.length}
          remainingTasks={remainingTasks}
        />

        {/* Task List */}
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />

        {/* Footer */}
        {/* <div className='text-center mt-12 text-gray-400 text-sm'>
          <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        </div> */}
      </div>
    </div>
  );
}
