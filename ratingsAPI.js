/* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const buffer = fs.readFileSync('./data.json');
const allObj = JSON.parse(buffer);
const app = express();
app.use(cors());



const catego = allObj.categories;
const posto =allObj.posts;

app.get('/posts/:id', (req, res) => {
    
  const post = posto.find(item => item.id === req.params.id);
  console.log(post);
  if (post) {
    console.log(post.author);
    setTimeout(() => res.json(post), Math.floor(Math.random() * 5000));
  } else {
    console.log(404, req.params.id);
    res.status(404).json({ error: 'show not found' });
  }
});

  app.get('/categories/:id', (req, res) => {
    
    const category = catego.find(item => item.id === req.params.id);
    console.log(category);
    if (category) {
      console.log(category.name);
      setTimeout(() => res.json(category), Math.floor(Math.random() * 5000));
    } else {
      console.log(404, req.params.id);
      res.status(404).json({ error: 'show not found' });
    }
  });
  



console.log(`Starting server on port 3000`);
console.log(`Generating new random ratings`);
app.listen(3000);