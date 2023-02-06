import { useState } from "react";
import { Task } from '../context/types'

interface AddTaskProps {
    addTask: (task: Task) => void
}

export default function AddTaskButton({ addTask }: AddTaskProps) {

    return (
        <button
            className="bg-[#DCE775] hover:bg-[#b6c248]
                     text-[#555555] text-3xl font-bold py-2 px-4 
                     rounded-full shadow-lg fixed bottom-9 right-16 z-10
                     hover:scale-110 transition-transform ease-in"
            onClick={
                () => {
                    addTask({ id: Math.random(), text: '' });
                }
            }
        >
            +
        </button>
    );
}
