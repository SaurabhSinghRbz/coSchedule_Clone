import { UpdateTodos,addinputbox, AddTodo } from "./actiontype.js";




export const updatetodos= (payload)=>{
return {
    type : UpdateTodos,
    payload
}
}


export const AddInputBox = (payload)=>{
    return {
        type : addinputbox,
        payload
        
    }
}

export const addtodo = (payload)=>{
    return {
        type : AddTodo,
        payload
    }
}