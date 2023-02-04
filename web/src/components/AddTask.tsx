import { useState } from "react";
import { Task } from '../context/types'

interface AddTaskProps {
    addTask: (task: Task) => void
}

export default function AddTask({ addTask }: AddTaskProps) {

    const [task, setTask] = useState('');

    return (
        <button
            className="bg-teal-500 hover:bg-teal-700
                     text-white text-2xl font-bold py-2 px-4 rounded absolute bottom-9 right-16"
            onClick={
                () => {
                    // pega id da API e coloca
                    addTask({ id: Math.random(), text: task });
                    setTask('');
                }
            }
        >
            +
        </button>
    );
}
