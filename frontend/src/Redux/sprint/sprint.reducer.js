import {
  loading,
  dataLoading,
  failed,
  sprint_add,
  sprint_get,
  sprint_getById,
  sprint_delete,
  sprint_update,
} from "./sprint.type";

const initialState = {
  sprintData: [],
  sprintDetails: {},
  loading: false,
  error: false,
};

export const sprintReducer = (state = initialState, { type, payload }) => {
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

    case sprint_get: {
      return {
        ...state,
        loading: false,
        error: false,
        dataLoading: false,
        sprintData: payload,
      };
    }

    case sprint_getById: {
      return { ...state, loading: false, error: false, sprintDetails: payload };
    }

    case sprint_add: {
      return { ...state, loading: false, error: false };
    }

    case sprint_delete: {
      return { ...state, loading: false, error: false };
    }

    case sprint_update: {
      return { ...state, loading: false, error: false };
    }

    default:
      return state;
  }
};
