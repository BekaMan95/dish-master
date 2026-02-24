import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todo-slice";
import loggerMiddleware from "../middlewares/loggerMiddleware";
import editorMiddleware from "../middlewares/editorMiddleware";

export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    // .concat(loggerMiddleware)
    // .concat(editorMiddleware),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
