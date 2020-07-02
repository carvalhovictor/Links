import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import accountReducer from "./reducers/AccountReducer";


const reducers = combineReducers({
	account: accountReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;