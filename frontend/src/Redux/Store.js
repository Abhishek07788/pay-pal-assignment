import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { sprintReducer } from "./sprint/sprint.reducer";
import { taskReducer } from "./task/task.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  User: userReducer,
  Sprint: sprintReducer,
  Task: taskReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
