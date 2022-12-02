import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: {},
    categories: [],
  },

  reducers: {
    addBook: (state, action) => {
      let { id } = action.payload;
      state.books = {
        ...state.books,
        [id]: action.payload,
      };
    },
    addCategory: (state, action) => {
      let authors = action.payload;
      !state.categories.includes(authors) && state.categories.push(authors)
    },
    clearBooks: (state) => {
      state.books = {};
    },
    removeBook: (state, action) => {
      const id = action.payload;
      delete state.books[id];
    },
  },
});

export const { addBook, addCategory, clearBooks, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
