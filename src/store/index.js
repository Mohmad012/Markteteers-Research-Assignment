import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favReducer from "./favReducer";
import booksReducer from "./booksReducer";
import modeReducer from "./modeReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = (key) => {
  return {
    key,
    version: 1,
    storage,
  };
};

const persistConfigFav = persistConfig("rootFav");
const persistConfigBook = persistConfig("rootBook");
const persistConfigMode = persistConfig("rootMode");

const favPersistedReducer = persistReducer(persistConfigFav, favReducer);
const booksPersistedReducer = persistReducer(persistConfigBook, booksReducer);
const modePersistedReducer = persistReducer(persistConfigMode, modeReducer);

const rootReducer = combineReducers({
  fav: favPersistedReducer,
  books: booksPersistedReducer,
  mode: modePersistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
