import { FooType } from "../../types/FooType";
import { DELETE_FOO, FooActionType, FOO_FAILURE, GET_FOO, SET_FOO } from "../types/foo";

const initialState: FooType[] = [];

// When we return the state, we always want to return it via a spread operator (... )
// that way we're not directly modifying the state object in place.
export const foo = (state = initialState, action: FooActionType) => {
    switch (action.type) {
        case GET_FOO:
            // Return the value for foo in the state
            return [...state];
        case SET_FOO:
            // Set a new value for foo
            return [...state, action.payload];
        case DELETE_FOO:
            return state.filter(foo => foo !== action.payload);
        case FOO_FAILURE:
            return [];
        default:
            // Return the original state.
            return state;
    }
};