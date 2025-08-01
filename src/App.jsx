// File: src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import BrowseBooks from './components/BrowseBooks'
import BookDetails from './components/BookDetails'
import AddBook from './components/AddBook'
import NotFound from './components/NotFound'
import Navbar from './pages/header'
import Footer from './pages/footer'

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books' element={<BrowseBooks />} />
      <Route path='/books/:category' element={<BrowseBooks />} />
      <Route path='/book/:id' element={<BookDetails />} />
      <Route path='/add-book' element={<AddBook />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </>
)
export default App


