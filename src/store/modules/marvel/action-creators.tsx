import { Dispatch } from "redux"
import { Action } from "./actions"
import {
    getCharacters as getCharactersApi,
    getCharacterById as getCharacterByIdApi
} from '../../../services/marvel/api'

export const getCharacters = (page?: number)=>{
    return (dispatch:Dispatch<Action>)=>{
        getCharactersApi(page).then((response:any)=>{
            dispatch({
                type: "getCharacters",
                payload: response
            })
        })
    }
}

export const getCharacterById = (id?: number)=>{
    return (dispatch:Dispatch<Action>)=>{
        getCharacterByIdApi(id).then((response:any)=>{
            dispatch({
                type: "getCharacterById",
                payload: response
            })
        })
    }
}