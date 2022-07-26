import { combineReducers } from "redux"
import MarvelReducer from "./marvel/reducer"

const reducers = combineReducers({
    marvel: MarvelReducer
})

export default reducers
export type State = ReturnType<typeof reducers>