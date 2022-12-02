import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    books: {},
    inFavProds: {},
  },

  reducers: {
    addFav: (state, action) => {
      let { id } = action.payload;
      state.books = {
        ...state.books,
        [id]: action.payload,
      };
      state.inFavProds[id] = true;
    },
    clearFavs: (state) => {
      state.books = {};
    },
    removeFav: (state, action) => {
      const id = action.payload;

      delete state.books[id];
      state.inFavProds[id] = false;
    },
  },
});

export const { addFav, clearFavs, removeFav } = favSlice.actions;

export default favSlice.reducer;
