import {
  loading,
  failed,
  dataLoading,
  task_add,
  task_get,
  task_getById,
  task_delete,
  task_update,
} from "./task.type";
import axios from "axios";

// ------------ (Add new task) ----------------
export const addTaskAction = (form) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    await axios.post("https://paypal-3knu.onrender.com/task", form);
    dispatch({ type: task_add });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (get task) ----------------
export const getTaskAction = () => async (dispatch) => {
  dispatch({ type: dataLoading });
  try {
    const res = await axios.get("https://paypal-3knu.onrender.com/task");
    dispatch({ type: task_get, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (get task by id) ----------------
export const getTaskByIdAction = (id) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.get(`https://paypal-3knu.onrender.com/task/${id}`);
    dispatch({ type: task_getById, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};


// ------------ (get task by sprint id) ----------------
export const getTaskBySprintIdAction = (id) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.get(`https://paypal-3knu.onrender.com/task/sprint/${id}`);
    dispatch({ type: task_get, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (get task by sprint id) ----------------
export const getTaskByName = (assignee_name) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.get(`https://paypal-3knu.onrender.com/task/name/${assignee_name}`);
    dispatch({ type: task_get, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};


// ------------ (delete task) ----------------
export const deleteTaskAction = (id) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.delete(`https://paypal-3knu.onrender.com/task/${id}`);
    dispatch({ type: task_delete });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (update task) ----------------
export const updateTaskAction = (id, cred) => async (dispatch) => {
  dispatch({ type: loading });
  try {
      await axios.patch(
      `https://paypal-3knu.onrender.com/task/${id}`,
      cred
    );
    dispatch({ type: task_update });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// // ------------ (Clear) ----------------
// export const ClearFunc = () => ({ type: clear });
