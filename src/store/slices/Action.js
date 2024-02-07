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
  async (requestData, { rejectWithValue }) => {
    console.log("requestData", requestData);
    try {
      const { data: responseData } = await instance.put(
        `/todos/update_todo/${requestData?.id}`,
        requestData?.data
      );
      return { id: requestData?.id, updatedData: responseData };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
