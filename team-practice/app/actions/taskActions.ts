'use server';

import { revalidatePath } from "next/cache";
import { supabase } from "../lib/supabase-client";


export const addTask = async ({task}: {task: string}) => {
    const {error} = await supabase
    .from('ToDoList')
    .insert({task})

    if (error) {
        console.error(error)
    }
    revalidatePath('/')
}

export const fectchList = async () => {
    const {data, error} = await supabase
    .from('ToDoList')
    .select('*')
    .order("created_at", {ascending: false})

    if (error) {
        console.error(error.message)
    }
    return data
}

export const removeTask = async (id: string) => {
    const {error} = await supabase
    .from('ToDoList')
    .delete()
    .eq('id', id)

    if (error) {
        console.error(error.message)
    }
    revalidatePath('/')
}