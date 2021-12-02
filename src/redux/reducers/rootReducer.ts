import { combineReducers } from "redux";
import { foo } from './foo';

// Explain the purpose of this file
// This file is the root reducer for the application.
// It combines all the reducers into one.
// This is the only file that needs to be imported into the store.

const rootReducer = combineReducers({ foo });

export default rootReducer;