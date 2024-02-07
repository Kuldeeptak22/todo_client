import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../apis/BaseUrl";

export const addTodoAction = createAsyncThunk(
  "addTodo",
  async (tododata, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/todos/add_todo", tododata);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTodosAction = createAsyncThunk(
  "getTodos",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/todos/get_todos");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTodoAction = createAsyncThunk(
  "deleteTodo",
  async (todo_id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/todos/remove_todo/${todo_id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateTodoAction = createAsyncThunk(
  "updateTodo",
  async (todo_id, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/todos/update_todo/${todo_id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
