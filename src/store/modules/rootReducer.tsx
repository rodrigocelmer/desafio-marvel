import { combineReducers } from "redux"
import MarvelReducer from "./marvel/reducer"
import MarvelReducer2 from "./marvel/reducer2"

const reducers = combineReducers({
    marvel: MarvelReducer,
    marvel2: MarvelReducer2
})

export default reducers
export type State = ReturnType<typeof reducers>