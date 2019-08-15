const express = require('express');
const app = express();
const port = 3003;
const bookmarksController = require('./controllers/bookmarks');
const mongoose = require('mongoose');
const cors = require('cors');

// middleware
app.use(express.json());
app.use(express.json());
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

// routes
app.use('/bookmarks', bookmarksController);

// Mongoose Stuff
// Error
mongoose.connection.on('error', err => {
  console.log((err.message = 'is the database running?'));
});
mongoose.connection.on('disconnected', () => {
  console.log('mongo disconnected');
});
// connected
mongoose.connect('mongodb://localhost:27017/bookmarks', {
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose');
});

// Listening
app.listen(port, () => {
  console.log('listening in on port:', port);
});
