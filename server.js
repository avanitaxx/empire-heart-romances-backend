const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Empire Heart Backend is working!');
});

// New route added below
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, Empire Heart!' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
