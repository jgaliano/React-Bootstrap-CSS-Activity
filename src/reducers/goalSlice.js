import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
    name:'goal',
    initialState:{
        value: [{
        'name': 'Completar todos los cursos del TDS',
        'description': 'Ganar todos los cursos',
        'dueDate':'2024-04-06'
    }]
    },
    reducer:{
        addGoal:(state, action)=>{
            state.value.push(action.payload)
        }
    },
        removeTodo: (state, action) => {
            state.value = state.value.filter(todo => todo.name !== action.payload.name);
    }
})

export const { addGoal, removeTodo } = goalSlice.actions;

export default goalSlice.reducer