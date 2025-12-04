'use client';

import { useState } from "react"
import { addTask } from "../actions/taskActions"
import Task from "./Task";

type task = {
    id: string
    created_at: string
    task: string
}

const ToDoList = ({tasks}: {tasks: task[]}) => {
    const [newTask, setNewTask] = useState({task: ''})

    const handleSubmit = (e: any) => {
        e.preventDefault()
        addTask(newTask)
        setNewTask({task: ''})
    }
    return (
        <>
            <div>
                <div><form onSubmit={handleSubmit}>
                        <input type="text"
                        value={newTask.task}
                        onChange={(e) => {
                            setNewTask(() => ({task: e.target.value}))
                        }}/>

                        <button type="submit">+</button>
                    </form>
                </div>
                <div>
                    {tasks.map(task => (
                        <Task key={task.id} content={task.task} id={task.id}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ToDoList