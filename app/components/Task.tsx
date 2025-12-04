import { removeTask } from "../actions/taskActions"

const Task = ({content, id}: {content: string, id:string}) => {
    return (
        <div>
            <div className="mb-4 h-10  bg-white border border-black flex flex-row justify-between items-center p-3 rounded-xl">
                <div className="flex flex-row gap-3">                
                    <input type="checkbox" />
                    <h1 className="text-black text-sm">{content}</h1>
                </div>

                <button onClick={() => removeTask(id)} className="w-5">x</button>
            </div>
        </div>
    )
}

export default Task