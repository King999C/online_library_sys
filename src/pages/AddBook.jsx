// // File: src/pages/AddBook.jsx
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { addBook } from '../redux/booksSlice'

// const AddBook = () => {
//   const [form, setForm] = useState({ title: '', author: '', description: '', rating: '', category: '' })
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     if (Object.values(form).some(val => val === '')) return alert('All fields required')
//     dispatch(addBook(form))
//     navigate('/books')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name='title' placeholder='Title' onChange={handleChange} />
//       <input name='author' placeholder='Author' onChange={handleChange} />
//       <input name='description' placeholder='Description' onChange={handleChange} />
//       <input name='rating' placeholder='Rating' onChange={handleChange} />
//       <input name='category' placeholder='Category' onChange={handleChange} />
//       <button type='submit'>Add Book</button>
//     </form>
//   )
// }
// export default AddBook


// src/pages/AddBook.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import "../styles/AddBook.css";


const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    category: '',
    rating: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.title) errs.title = 'Title is required';
    if (!form.author) errs.author = 'Author is required';
    if (!form.description) errs.description = 'Description is required';
    if (!form.category) errs.category = 'Category is required';
    if (!form.rating) errs.rating = 'Rating is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(addBook({ id: Date.now(), ...form }));
      navigate('/browse');
    }
  };

  return (
    <div className="container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="form">
        {['title', 'author', 'description', 'category', 'rating'].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type={field === 'rating' ? 'number' : 'text'}
              name={field}
              value={form[field]}
              onChange={handleChange}
            />
            {errors[field] && <span className="error">{errors[field]}</span>}
          </div>
        ))}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
