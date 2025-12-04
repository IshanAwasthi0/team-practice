import { removeTask } from "../actions/taskActions"

const Task = ({content, id}: {content: string, id:string}) => {
    return (
        <div>
            <div>
                <h1 className="text-black text-sm">{content}</h1>
                <button onClick={() => removeTask(id)}>x</button>
            </div>
        </div>
    )
}

export default Task