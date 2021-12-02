import { RootStateOrAny } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { FooType } from "../../types/FooType";
import { 
    DeleteFooActionType, 
    DELETE_FOO, 
    GetFooActionType, 
    GET_FOO, 
    SetFooActionType, 
    SET_FOO,
    FooActionType, 
    FooFailureActionType,
    FOO_FAILURE} from "../types/foo";


/*
A brief note about actions. Actions should never perform logic. They should only be in charge of
sending an object with a type key specifying what kind of action they are, and a 
payload containing additional data if relevant (for sets, updates, and deletes mainly).
*/

export const getFoo = (): GetFooActionType => ({
    type: GET_FOO
});

export const setFoo = (foo: FooType): SetFooActionType => ({
    type: SET_FOO,
    payload: foo
});

export const deleteFoo = (foo: FooType): DeleteFooActionType => ({
    type: DELETE_FOO,
    payload: foo
});

export const fooFailure = (): FooFailureActionType => ({
    type: FOO_FAILURE
})

const exampleFooPayload = {
    foo: "bar"
}

// A thunk is a middleware of sorts (think of it as a way to perform logic "between" two redux actions)
// For example, if my application needed to submit an order, I would use a thunk to make the API call in,
// and then call the specific Redux Action related to the outcome of the API call. (success if it worked, failure if it didn't)
// This works great for error handling as well :)

// You don't need to use thunks if you don't want to, but it's a good idea to use them.
/*
    Alternatively, you can handle the logic in your application code:

    const mapDispatchToProps = (dispatch: Dispatch<RootStateOrAny>) => ({
        ...
    })

    const someFunction = (foo: FooType) => {
        // dispatch your actions here
        try {
            // dispatch succes
        }
        catch (error) {
            // dispatch failure
        }
    })
*/

export const someCallableProcess = (): ThunkAction<
    void,
    RootStateOrAny,
    unknown,
    FooActionType
> => async dispatch => {
    try {
        // For asynchronous operations, just use await here!
        dispatch(getFoo());
        dispatch(setFoo(exampleFooPayload));
        dispatch(deleteFoo(exampleFooPayload));
    } catch (e) {
        dispatch(fooFailure());
    }
};