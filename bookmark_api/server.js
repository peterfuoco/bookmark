const express = require('express');
const app = express();
const port = 3003;

// middleware

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hey Peter');
});

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
  console.log('listening in on ', port);
});
