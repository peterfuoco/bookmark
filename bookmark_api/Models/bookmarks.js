const mongoose = require ('mongoose');

const bookmarksSchema = mongoose.Schema ( {
    title: {type: String, required: true },
    url: {
        type: String,
        required: true
     }
});

module.exports = mongoose.model('Bookmarks', bookmarksSchema);
