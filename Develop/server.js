const express = require('express');

const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);