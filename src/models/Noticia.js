const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

module.exports = mongoose.model('Noticia', noticiaSchema);
