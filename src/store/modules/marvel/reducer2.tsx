import { Action2 } from "./actions";

const initialState: object = {} 

export default function reducer(state:object = initialState, action:Action2) {
    
    switch (action.type) {
        case 'getCharacterById':
            return action.payload
        default:
            return state;
    }

}