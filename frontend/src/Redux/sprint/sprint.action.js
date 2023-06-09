import {
  loading,
  failed,
  dataLoading,
  sprint_add,
  sprint_get,
  sprint_getById,
  sprint_delete,
} from "./sprint.type";
import axios from "axios";

// ------------ (Add new sprint) ----------------
export const addSprintAction = (form) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    await axios.post("https://paypal-3knu.onrender.com/sprint", form);
    dispatch({ type: sprint_add });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (get sprint) ----------------
export const getSprintAction = () => async (dispatch) => {
  dispatch({ type: dataLoading });
  try {
    const res = await axios.get("https://paypal-3knu.onrender.com/sprint");
    dispatch({ type: sprint_get, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (get sprint by id) ----------------
export const getSprintByIdAction = (id) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.get(`https://paypal-3knu.onrender.com/sprint/${id}`);
    dispatch({ type: sprint_getById, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (delete sprint) ----------------
export const deleteSprintAction = (id) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.delete(`https://paypal-3knu.onrender.com/sprint/${id}`);
    dispatch({ type: sprint_delete });
  } catch (e) {
    dispatch({ type: failed });
  }
};

