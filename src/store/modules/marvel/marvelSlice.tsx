import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export type HeroeImage = {
    path: string,
    extension: string
}

export type ComicObj = {
    available: number,
    item: Array<string>
}

export type UrlObj = {
    type: string,
    url: string
}

export type HeroesInfo = {
    id: number,
    name: string,
    image: HeroeImage,
    comics: ComicObj,
    urls: UrlObj
}[]

export const getCharacters = createAsyncThunk(
    'marvel/getCharacters',
    async () => {
        const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=48462bd0c57003ff9c883f2ce138866d`);
        return data;
    }
)

const slice = createSlice({
    name: 'marvel',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCharacters.fulfilled, (state, {payload}) => {
           state = payload.data.results.map((hero: any) => {
            return{
                id: hero.id,
                name: hero.name,
            }
           })
        })
    }
})

export default slice.reducer;