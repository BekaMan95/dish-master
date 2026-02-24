import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoProps } from "../type";

interface TodoState {
  todos: TodoProps[];
}

const initialState: TodoState = {
  todos: [{ id: -1, title: 'Buy groceries', completed: false },],
};


const todoSlice = createSlice({
    name: "todo",
    initialState,

    reducers: {
        addTodo: (state, action: PayloadAction<TodoProps>) => {
            // console.log('Adding todo:', action.payload.title);
            // console.log('Current todos:', state.todos);
            state.todos = [...state.todos, action.payload];
        },
    }
});


export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
