import { MutableRefObject, useRef, useState, useEffect } from "react";
import { TwitterPicker } from 'react-color';
import useOnClickOutside from "../hooks/useOnClickOutside";
import { PenTool, Type, X } from 'react-feather';

interface Task  {
    id: number,
    text: string,
    width: number,
    height: number,
    taskColor: string,
    textColor: string,
}

interface TaskProps {
    task: Task,
    editTask: (newTask: Task) => void,
    deleteTask: (taskId: number) => void
}

export default function TaskComponent({ task, editTask, deleteTask }: TaskProps) {

    const [tastkText, setTastkText] = useState(task.text);

    const [isPickingColor, setIsPickingColor] = useState(false);
    const [isPickingTextColor, setIsPickingTextColor] = useState(false);

    const [taskColor, setTaskColor] = useState(task.taskColor);
    const [textColor, setTextColor] = useState(task.textColor);

    const [taskDimensions, setTaskDimensions] = useState({width: task.width, height: task.height});

    const taskColorPickerRef = useRef(null)
    useOnClickOutside(taskColorPickerRef, () => { setIsPickingColor(false) });

    const textColorPickerRef = useRef(null)
    useOnClickOutside(textColorPickerRef, () => { setIsPickingTextColor(false) });

    const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const handleResize = (width: number, height: number) => {
        console.log(`${width} , ${height}`);
        setTaskDimensions({width: width, height: height});
    }

    const pickerColors =
        [
            '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4',
            '#555555', '#dce775', '#ff8a65', '#ba68c8'
        ];
    

    useEffect(() => {
        const newTask = {
            id: task.id,
            text: tastkText.trim(),
            width: taskDimensions.width,
            height: taskDimensions.height,
            taskColor: taskColor,
            textColor: textColor
        }
        editTask(newTask);
    },[tastkText,taskColor,textColor,taskDimensions])

    return (
        <div className="relative">
            {
                isPickingColor &&
                <div className="absolute z-50 left-0 mt-10 " ref={taskColorPickerRef}>
                    <TwitterPicker
                        colors={pickerColors}
                        color={taskColor}
                        onChange={(taskColor) => setTaskColor(taskColor.hex)}
                        onChangeComplete={() => setIsPickingColor(false)}
                    />
                </div>
            }
            {
                isPickingTextColor &&
                <div className="absolute z-50 left-[34px] mt-10" ref={textColorPickerRef}>
                    <TwitterPicker
                        color={textColor}
                        colors={pickerColors}
                        onChange={(color) => setTextColor(color.hex)}
                        onChangeComplete={() => setIsPickingTextColor(false)}
                    />
                </div>
            }
            <div className="relative shrink-0 shadow-2xl overflow-hidden resize max-w-2xl max-h-[500px] min-w-[150px] min-h-[100px]"
                style={{height: taskDimensions.height, width: taskDimensions.width}}
                ref={containerRef}
                onMouseUp={(e)=>handleResize(containerRef.current.clientWidth,containerRef.current.clientHeight)}
            >

                <textarea
                    className="
                    px-6 py-11 text-xl mb-3 overflow-auto focus:outline-none h-full w-full resize-none"
                    style={{ backgroundColor: taskColor, color: textColor }}
                    value={tastkText}
                    maxLength={500}
                    spellCheck="false"
                    onChange={(e) => { setTastkText(e.target.value) }}
                    autoFocus={tastkText.length === 0 ? true : false}
                >
                </textarea>

                <div className="absolute top-0 p-1 w-full flex items-center justify-between shadow-sm brightness-75"
                    style={{ backgroundColor: taskColor }}
                >
                    <div className="flex justify-around items-center">
                        <PenTool
                            className="ml-2 h-4 hover:cursor-pointer z-20"
                            role="button"
                            onClick={() => { if (isPickingColor == false) setIsPickingColor(true) }}
                        />
                        <Type
                            className="ml-2 h-4 hover:cursor-pointer"
                            role="button"
                            onClick={() => { if (isPickingTextColor == false) setIsPickingTextColor(true) }}
                        />
                    </div>

                    <div className="flex justify-around items-center hover:cursor-pointer">
                        <X onClick={() => deleteTask(task.id)}/>
                    </div>
                </div>

            </div>
        </div>

    );
}