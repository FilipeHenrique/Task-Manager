import { useEffect, useRef, useState } from "react";
import { SketchPicker } from 'react-color';
import useOnClickOutside from "../hooks/useOnClickOutside";

interface TaskProps {
    id: number,
    text: string,
    editTask: (taskId: number, tasktext: string) => void,
    deleteTask: (taskId: number) => void
}

export default function TaskComponent({ id, text, editTask, deleteTask }: TaskProps) {

    const [tasktext, setTasktext] = useState(text);
    const [isPickingColor, setIsPickingColor] = useState(false);
    const [isPickingTextColor, setIsPickingTextColor] = useState(false);
    const [color, setColor] = useState('#8db9b9');
    const [textColor, setTextColor] = useState('');


    const handleEditask = () => {
        editTask(id, tasktext.trim());
    }

    const taskRef = useRef(null)
    useOnClickOutside(taskRef, () => { setIsPickingColor(false) });

    const textREf = useRef(null)
    useOnClickOutside(textREf, () => { setIsPickingTextColor(false) });

    return (
        <div  className="relative">
            {
                isPickingColor &&
                <div className="absolute z-50 left-[10px] mt-7 " ref={taskRef}>
                    <SketchPicker color={color} onChange={(color) => setColor(color.hex)} />
                </div>
            }
            {
                isPickingTextColor &&
                <div className="absolute z-50 left-8 mt-7" ref={textREf}>
                    <SketchPicker color={textColor} onChange={(color) => setTextColor(color.hex)} />
                </div>
            }
            <div className="relative shrink-0 shadow-lg overflow-hidden resize h-60 max-w-2xl max-h-[500px] min-w-[150px] min-h-[100px]" >

                <textarea
                    className="
                    px-6 py-11 text-xl mb-3 overflow-auto focus:outline-none h-full w-full resize-none"
                    style={{ backgroundColor: color, color: textColor }}
                    value={tasktext}
                    maxLength={500}
                    onChange={(e) => setTasktext(e.target.value)}
                    onBlur={() => handleEditask()}
                    onKeyDown={(e) => { if (e.key === "Enter") handleEditask() }}
                    autoFocus={tasktext.length === 0 ? true : false}
                >
                </textarea>
                <div className="absolute top-0 shadow-sm p-1 w-full flex items-center justify-between"
                    style={{ backgroundColor: color }}
                >
                    <div className="flex justify-around">
                        <div
                            className="ml-2 rounded-full  w-1 h-1 p-1 bg-black"
                            onClick={() => { if (isPickingColor == false) setIsPickingColor(true) }}
                        />
                        <div
                            className="ml-2 rounded-full  w-1 h-1 p-1 bg-black"
                            onClick={() => { if (isPickingTextColor == false) setIsPickingTextColor(true) }}
                        />
                    </div>
                    <button className="px-3 float-right" onClick={() => deleteTask(id)}> x </button>
                </div>

            </div>
        </div>

    );
}