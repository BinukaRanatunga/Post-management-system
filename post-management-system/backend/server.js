const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let posts = [];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201).json(post);
});

app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedPost = req.body;
  posts = posts.map((post) => (post.id === id ? updatedPost : post));
  res.json(updatedPost);
});

app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  posts = posts.filter((post) => post.id !== id);
  res.status(204).end();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
