import express from 'express';
import { getAll, getItem } from './data.js';

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  const albums = getAll(); // Use the getAll function to fetch all albums
  res.render('home', { albums });
});

app.get('/details/:title', (req, res) => {
  const album = getItem(req.params.title);
  if (album) {
    res.render('details', { album });
  } else {
    res.status(404).send('Album not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
