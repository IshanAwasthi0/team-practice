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
            <div className="flex flex-col items-center  bg-white w-screen h-100 pt-20 gap-5">
                <h1 className="text-black text-4xl align-left justify-self-start font-sans font-bold flex">Your to Do</h1>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-row gap-5"> 
                        <input type="text"
                        placeholder="Add new task"
                        value={newTask.task}
                        onChange={(e) => {
                            setNewTask(() => ({task: e.target.value}))
                        }} className="text-neutral-500 p-4 w-100 h-8 bg-black-50 border-b-2 border-black"/>

                        <button type="submit" className="text-amber-50 w-10 h-1=8 bg-neutral-600 rounded-xl text-3xl">+</button>
                    </form>
                </div>
                <div className="text-black bg-amber-50 w-200 ">
                    {tasks.map(task => (
                        <Task key={task.id} content={task.task} id={task.id}/>
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default ToDoList