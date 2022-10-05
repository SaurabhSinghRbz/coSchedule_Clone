import { isLoginReducer as logger } from "./logger/reducer";
import { legacy_createStore, combineReducers,applyMiddleware } from "redux";
import { reducer as App_reducer } from "./App_reducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  logger,App_reducer
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);
