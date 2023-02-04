import { useRef, useState } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

interface TaskProps {
    id: number,
    title: string,
    editTask: (taskId: number, taskTitle: string) => void,
    deleteTask: (taskId: number) => void
}

export default function TaskComponent({ id, title, editTask, deleteTask }: TaskProps) {

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [taskTitle, setTaskTitle] = useState(title);

    const handleEditask = () => {
        if (taskTitle.length > 0){
            editTask(id, taskTitle);
        }else{
            setTaskTitle(title);
        }
        setIsEditingTitle(false);
    }

    const ref = useRef(null);
    useOnClickOutside(ref, () => { handleEditask() });

    return (
        <div className="flex justify-between border-2 border-gray-500 p-5">
            <div>
                {
                    !isEditingTitle ?
                        <p
                            className="text-3xl font-bold mb-3 focus:outline-none"
                            onClick={() => setIsEditingTitle(true)}
                        >
                            {title}
                        </p>
                        :
                        <input
                            ref={ref}
                            className="text-3xl font-bold mb-3 focus:outline-none"
                            maxLength={30}
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            onKeyDown={(e)=>{if(e.key === "Enter") handleEditask()}}
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
                                handleEditask()
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