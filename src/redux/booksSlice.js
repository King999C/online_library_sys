// File: src/redux/booksSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  books: [
    { id: '1', title: 'Dune', author: 'Frank Herbert', description: 'Sci-Fi classic', rating: 4.8, category: 'Sci-Fi' },
    { id: '2', title: '1984', author: 'George Orwell', description: 'Dystopian novel', rating: 4.7, category: 'Fiction' }
  ]
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = { id: nanoid(), ...action.payload }
      state.books.push(book)
    }
  }
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer
