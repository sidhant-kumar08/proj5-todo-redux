import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
{
    id: nanoid(),
    text: "Hello World",
    completed: false
}]

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo : (state, action) => {
            state.push({
                id: nanoid(),
                text: action.payload.text
            });
        },

        removeTodo : (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id )
        },

        toggleComplete: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
}) 


export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions
export default todoSlice.reducer