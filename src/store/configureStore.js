import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

const enhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, enhancers);
