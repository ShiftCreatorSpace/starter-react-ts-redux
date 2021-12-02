import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

/*
    There is a lot more to this file than there currently is.

    A common feature that you may want is to be able to persist (save) your redux store even
    after the application is closed. Essentailly, saving your redux store into session or local storage
    on the browser. To do this, I recommend this library: https://github.com/rt2zz/redux-persist, it has
    great documentation and is well maintained.

    If you end up using it, heads up that as of 04-2021 parts of it have not been typed yet for typescript
    so add this if you need to: eslint-disable @typescript-eslint/no-explicit-any above the offending line

    You could also add additional middleware here if they need access to the entire store. For example,
    we used an error reporting service called Rollbar (similar to sentry) and whenever there was an error,
    we would send the complete redux store for debugging. We added a thunk to do that here. Wtih the functions
    applyMiddleware and compose from redux library.

    Or just leave it as is, this is enough for basic usages of redux.
*/

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
