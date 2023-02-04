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
        setColor('#8db9b9');
    },[])

    return (
        <div className="relative shrink-0 shadow-lg overflow-hidden resize h-60 max-w-2xl max-h-[500px] min-w-[150px] min-h-[100px]" >
            <textarea
                className="
                    px-6 py-8 text-xl mb-3 overflow-auto focus:outline-none h-full w-full resize-none"
                style={{backgroundColor: color}}
                value={tasktext}
                onChange={(e) => setTasktext(e.target.value)}
                onBlur={() => handleEditask()}
                onKeyDown={(e) => { if (e.key === "Enter") handleEditask() }}
                autoFocus={tasktext.length === 0 ? true : false}
            >
            </textarea>
            <div className="absolute top-0 shadow-sm w-full" 
                style={{backgroundColor: color}}
            >
                <button className="px-3 float-right" onClick={() => deleteTask(id)}> x </button>
            </div>
        </div>
    );
}