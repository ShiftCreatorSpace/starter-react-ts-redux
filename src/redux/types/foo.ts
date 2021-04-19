import { FooType } from "../../types/FooType";

// Obviously Foo can be replaced with anything, 
// these are the types for basic CRUD operations. 
// Defining these as constants prevents you from making typos :)
export const GET_FOO = 'GET_FOO';
export const SET_FOO = 'SET_FOO';
export const DELETE_FOO = 'DELETE_FOO';
export const FOO_FAILURE = "FOO_FAILURE"

export type GetFooActionType = {
    type: typeof GET_FOO
};

export type SetFooActionType = {
    type: typeof SET_FOO
    payload: FooType
};

export type DeleteFooActionType = {
    type: typeof DELETE_FOO;
    payload: FooType;
};

export type FooFailureActionType = {
    type: typeof FOO_FAILURE;
}

// If you add new actions above, don't forget to add them to this type! 
// This is what the reducer (and/or thunk) will use to make sure it is able to receive all applicable actions
export type FooActionType =
    | GetFooActionType
    | SetFooActionType
    | DeleteFooActionType
    | FooFailureActionType
