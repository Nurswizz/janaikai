const {client} = require('../config/db');

exports.getArticles = async (req, res) => {
    try {
        const articles = await client.db('db').collection('articles').find().toArray();
        res.json(articles);
    } catch (err) {
        console.error('Get articles error:', err);
        res.status(500).json({ message: 'Internal server error.' });
    }
}