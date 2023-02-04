import { useEffect, useRef, useState } from "react";

interface TaskProps {
    id: number,
    text: string,
    editTask: (taskId: number, tasktext: string) => void,
    deleteTask: (taskId: number) => void
}

export default function TaskComponent({ id, text, editTask, deleteTask }: TaskProps) {

    const [tasktext, setTasktext] = useState(text);

    const handleEditask = () => {
        editTask(id, tasktext.trim());
    }

    const [color, setColor] = useState('');
    useEffect(()=>{
        // setColor("#"+Math.floor(Math.random()*16777215).toString(16));
        setColor('white');
    },[])

    return (
        <div className="relative shadow-lg overflow-hidden resize h-60 max-w-2xl max-h-[500px] min-w-[150px] min-h-[100px]" >
            <textarea
                className="
                    px-6 py-6 text-xl mb-3 overflow-auto focus:outline-none h-full w-full resize-none"
                style={{backgroundColor: color}}
                value={tasktext}
                onChange={(e) => setTasktext(e.target.value)}
                onBlur={() => handleEditask()}
                onKeyDown={(e) => { if (e.key === "Enter") handleEditask() }}
                autoFocus={tasktext.length === 0 ? true : false}
            >
            </textarea>
                <button className="px-3 absolute top-0 right-0" onClick={() => deleteTask(id)}> x </button>
        </div>
    );
}