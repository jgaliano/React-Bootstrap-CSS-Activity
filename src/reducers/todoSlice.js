import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todos',
    initialState:{
        value: [{
        'name': 'realizar actividad 1 ',
        'description': 'instalar paquetes de librerias para tarea 1 ',
        'dueDate':'2024-04-06'
    }]
    },
    reducers:{
        addTodo:(state, action)=>{
            state.value.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.value = state.value.filter(todo => todo.name !== action.payload.name);
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer