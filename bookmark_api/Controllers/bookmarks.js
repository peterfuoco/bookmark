const express = require('express');
const bookmarks = express.Router();
const Bookmark = require('../models/bookmarks');

bookmarks.get('/', (req, res) => {
  res.send('heyoooo');
});

module.exports = bookmarks;
