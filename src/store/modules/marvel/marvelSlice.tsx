import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getCharacters from "../../../services/marvel/api";
import api from "../../../services/marvel/api";

export type HeroeImage = {
  path: string;
  extension: string;
};

export type ComicObj = {
  available: number;
  item: Array<string>;
};

export type UrlObj = {
  type: string;
  url: string;
};

export type HeroesInfo = {
  id: number;
  name: string;
  image: HeroeImage;
  comics: ComicObj;
  urls: UrlObj;
}[];

export type MarvelResponse = {
  character: [];
};

export const fetchCharacters = createAsyncThunk(
  "marvel/fetchCharacters",
  async () => {
    const { data } = await getCharacters();

    return data.results;
  }
);

const initialState = {} as MarvelResponse;
const slice = createSlice({
  name: "marvel",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchCharacters.fulfilled, (state, { payload }) => {
      state.character = payload.map((character: any) => {
        return {
          name: character.name,
          image: character.thumbnail.path,
          extension: character.thumbnail.extension,
          id: character.id,
        };
      });
    });
  },
});

export default slice.reducer;
