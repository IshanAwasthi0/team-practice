import { supabase } from "../lib/supabase-client";


export const addTask = async ({task}: {task: string}) => {
    const {error} = await supabase
    .from('ToDoList')
    .insert({task})

    if (error) {
        
    }
}