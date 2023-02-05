import { useEffect, useRef, useState } from "react";
import { SketchPicker, TwitterPicker } from 'react-color';
import useOnClickOutside from "../hooks/useOnClickOutside";
import { PenTool, Type, X } from 'react-feather';


interface TaskProps {
    id: number,
    text: string,
    editTask: (taskId: number, tastkText: string) => void,
    deleteTask: (taskId: number) => void
}

export default function TaskComponent({ id, text, editTask, deleteTask }: TaskProps) {

    const [tastkText, setTastkText] = useState(text);

    const [isPickingColor, setIsPickingColor] = useState(false);
    const [isPickingTextColor, setIsPickingTextColor] = useState(false);

    const [color, setColor] = useState('#697689');
    const [textColor, setTextColor] = useState('#D9E3F0');

    const taskRef = useRef(null)
    useOnClickOutside(taskRef, () => { setIsPickingColor(false) });

    const textREf = useRef(null)
    useOnClickOutside(textREf, () => { setIsPickingTextColor(false) });

    const pickerColors =
        [
            '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4',
            '#555555', '#dce775', '#ff8a65', '#ba68c8'
        ];

    return (
        <div className="relative">
            {
                isPickingColor &&
                <div className="absolute z-50 left-0 mt-10 " ref={taskRef}>
                    <TwitterPicker
                        color={color}
                        colors={pickerColors}
                        onChange={(color) => setColor(color.hex)}
                        onChangeComplete={() => setIsPickingColor(false)}
                    />
                </div>
            }
            {
                isPickingTextColor &&
                <div className="absolute z-50 left-[34px] mt-10" ref={textREf}>
                    <TwitterPicker
                        color={textColor}
                        colors={pickerColors}
                        onChange={(color) => setTextColor(color.hex)}
                        onChangeComplete={() => setIsPickingTextColor(false)}
                    />
                </div>
            }
            <div className="relative shrink-0 shadow-lg overflow-hidden resize h-60 max-w-2xl max-h-[500px] min-w-[150px] min-h-[100px]" >

                <textarea
                    className="
                    px-6 py-11 text-xl mb-3 overflow-auto focus:outline-none h-full w-full resize-none"
                    style={{ backgroundColor: color, color: textColor }}
                    value={tastkText}
                    maxLength={500}
                    spellCheck="false"
                    onChange={(e) => { setTastkText(e.target.value); editTask(id, e.target.value.trim()) }}
                    autoFocus={tastkText.length === 0 ? true : false}
                // onBlur={() => handleEditask()}
                // onKeyDown={(e) => { if (e.key === "Enter") handleEditask() }}
                >
                </textarea>
                <div className="absolute top-0 shadow-sm mix-blend-color-burn p-1 w-full flex items-center justify-between"
                    style={{ backgroundColor: 'lightgrey' }}
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
                        <X onClick={() => deleteTask(id)}/>
                    </div>
                </div>

            </div>
        </div>

    );
}