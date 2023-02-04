import { useState } from "react";

interface TaskProps {
    id: number,
    title: string,
    editTask: (taskId: number, taskTitle: string ) => void,
    deleteTask: (taskId: number) => void
}

export default function TaskComponent({ id, title, editTask, deleteTask }: TaskProps) {

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [taskTitle, setTaskTitle] = useState(title);

    return (
        <div className="flex justify-between border-2 border-gray-500 p-5">
            <div>
                {
                    !isEditingTitle ? <p onClick={() => setIsEditingTitle(true)}>{title}</p>
                    :
                        <input
                            className="text-3xl font-bold mb-3 focus:outline-none"
                            maxLength={30}
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            autoFocus
                        />

                }
            </div>
            <div className="flex gap-2 justify-center items-center">
                {
                    isEditingTitle &&
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={
                            () => { 
                                if (taskTitle.length > 0) setIsEditingTitle(false);
                                editTask(id,taskTitle); 
                            }
                        }
                    >
                        Save
                    </button>
                }
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteTask(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}