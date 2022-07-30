import { combineReducers } from "redux";
import marvel from "./marvel/marvelSlice";

const reducers = combineReducers({
  marvel,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
