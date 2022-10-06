import { isLoginReducer as logger } from "./logger/reducer";
import { legacy_createStore, combineReducers,applyMiddleware,compose } from "redux";
import { reducer as App_reducer } from "./App_reducer/reducer";
import { todosreducer } from "./todoreducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  logger,App_reducer,todosreducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export  const store = legacy_createStore(rootReducer, composeEnhancers(
     applyMiddleware(thunk)
 ));
