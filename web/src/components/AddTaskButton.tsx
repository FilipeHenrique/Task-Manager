import { Plus } from "react-feather";

interface AddTaskProps {
    addTask: () => void
}

export default function AddTaskButton({ addTask }: AddTaskProps) {

    return (
        <div
            className="bg-[#DCE775] hover:bg-[#b6c248]
                     text-[#555555] text-3xl font-bold p-4 
                     hover:cursor-pointer
                     rounded-full shadow-lg fixed bottom-9 right-16 z-10
                     hover:scale-110 transition-transform ease-in flex justify-center items-center"
            onClick={() => addTask()}>
            <Plus />
        </div>
    );
}
