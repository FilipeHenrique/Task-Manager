import { useState } from "react";
import { Task } from '../context/types'

interface AddTaskProps {
    addTask: (task: Task) => void
}

export default function AddTask({ addTask }: AddTaskProps) {

    const [task, setTask] = useState('');
    const [fieldError, setFieldError] = useState('');

    const handleTaskChange = (newTask: string) => {
        setTask(newTask);
    }

    return (
        <div className="flex flex-col  justify-center">
            <div className="flex gap-3 mb-3">
                <input
                    type="text" name="task" id="task" placeholder='Add a task title'
                    className='bg-gray-100 p-2'
                    value={task}
                    onChange={(e) => { handleTaskChange(e.target.value), setFieldError('') }}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={
                        () => {
                            // pega id da API e coloca
                            if (task.length > 0) {
                                addTask({ id: Math.random(), title: task });
                                setTask('');
                            } else {
                                setFieldError('Task title field cannot be empty');
                            }
                        }
                    }
                >
                    Add
                </button>
            </div>
            <p className="text-xs text-red-600 ">{fieldError}</p>
        </div>
    );
}
