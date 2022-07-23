import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import rootReducer from "./modules/rootReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'desafio-marvel-grupo4-2022',
    storage,
    whitelist: ['marvel']
}
const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducers
})
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;