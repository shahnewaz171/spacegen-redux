import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootRenderer from "./reducers/rootReducer";

const store = createStore(rootRenderer, composeWithDevTools());

export default store;