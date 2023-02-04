import { useState } from "react";

interface TaskProps {
    id: number,
    title: string,
}

export default function TaskComponent({ id, title }: TaskProps) {

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [taskTitle, setTaskTitle] = useState(title);

    return (
        <div className="flex justify-between border-2 border-gray-500 p-5">
            <div>
                {
                        <div>
                            <input
                                className="text-3xl font-bold mb-3 focus:outline-none"
                                maxLength={30}
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                onClick={()=>setIsEditingTitle(true)}
                                autoFocus
                            />
                        </div>

                }
            </div>
            <div className="flex gap-2 justify-center items-center">
                {
                    isEditingTitle &&
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {if(taskTitle.length > 0) setIsEditingTitle(false)}}
                    >
                        Save
                    </button>
                }
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                </button>
            </div>
        </div>
    );
}