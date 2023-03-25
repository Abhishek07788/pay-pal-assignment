import {
  loading,
  dataLoading,
  failed,
  task_add,
  task_get,
  task_getById,
  task_delete,
  task_update,
} from "./task.type";

const initialState = {
  taskData: [],
  taskDetails: {},
  loading: false,
  error: false,
};

export const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loading: {
      return { ...state, loading: true, error: false };
    }

    case dataLoading: {
      return { ...state, loading: false, error: false, dataLoading: true };
    }

    case failed: {
      return { ...state, loading: false, error: true, dataLoading: false };
    }

    case task_get: {
      return {
        ...state,
        loading: false,
        error: false,
        dataLoading: false,
        taskData: payload,
      };
    }

    case task_getById: {
      return { ...state, loading: false, error: false, taskDetails: payload };
    }

    case task_add: {
      return { ...state, loading: false, error: false };
    }

    case task_delete: {
      return { ...state, loading: false, error: false };
    }

    case task_update: {
      return { ...state, loading: false, error: false };
    }

    default:
      return state;
  }
};
