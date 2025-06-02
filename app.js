const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  let airingInfo = 'No upcoming airings found.';

  try {
    const searchRes = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=the%20martian');
    const showId = searchRes.data.id;

    const episodesRes = await axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`);
    const upcoming = episodesRes.data.find(ep => new Date(ep.airstamp) > new Date());

    if (upcoming) {
      airingInfo = `${upcoming.name} airs on ${new Date(upcoming.airstamp).toLocaleString()}`;
    }
  } catch (err) {
    console.error('TVMaze API error:', err.message);
  }

  res.render('index', { airingInfo });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
