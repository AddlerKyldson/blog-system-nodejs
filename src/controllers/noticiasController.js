const Noticia = require('../models/Noticia');

exports.getAll = async (req, res) => {
    try {
        const noticias = await Noticia.find();
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    const noticia = new Noticia({
        title: req.body.title,
        content: req.body.content,
    });

    try {
        const newNoticia = await noticia.save();
        res.status(201).json(newNoticia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required.' });
    }

    const noticia = new Noticia({
        title,
        content,
    });

    try {
        const newNoticia = await noticia.save();
        res.status(201).json(newNoticia);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
