import { createStore } from "redux";
import rootReducers from "./combinered";

const store = createStore(rootReducers);

export default store;