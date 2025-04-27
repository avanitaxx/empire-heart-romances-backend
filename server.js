const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Allow JSON body

let books = [
  { id: 1, title: 'Empire of Dreams', author: 'Ava Sky' },
  { id: 2, title: 'Heart of Legends', author: 'Max Rivers' },
  { id: 3, title: 'Romance Reborn', author: 'Luna Frost' }
];

// GET existing books
app.get('/api/books', (req, res) => {
  res.json(books); // This will return the array of books
});

// POST new book
app.post('/api/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook); // This sends back the new book
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
