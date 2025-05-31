"use client";

import { useState } from "react";
import { toast } from "sonner";
import { AddTaskFormProps } from "@/types";

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      toast.error("Please enter a task");
      return;
    }

    onAddTask(inputValue.trim());
    setInputValue("");
    toast.success("Task added successfully");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='mb-8'>
      <div className='flex gap-2'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='What needs to be done?'
          className='flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors'
        />
        <button
          type='submit'
          className='px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium'
        >
          Add Task
        </button>
      </div>
    </form>
  );
}
