const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Make sure this line is there to handle JSON data
app.use(express.json());

let books = [
  { id: 1, title: 'Empire of Dreams', author: 'Ava Sky' },
  { id: 2, title: 'Heart of Legends', author: 'Max Rivers' },
  { id: 3, title: 'Romance Reborn', author: 'Luna Frost' }
];

// GET route to get books
app.get('/api/books', (req, res) => {
  res.json(books); // Return the books array
});

// POST route to add books
app.post('/api/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook); // Send back the newly added book
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
