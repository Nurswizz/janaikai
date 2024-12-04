const { client } = require('../config/db');
const ObjectId = require('mongodb').ObjectId;
const cloudinary = require('../controllers/uploadController').cloudinary;

exports.deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;

        // Convert the id to ObjectId
        const objectId = new ObjectId(id);
        const article = await client.db('db').collection('articles').findOne({ _id: objectId });

        cloudinary.uploader.destroy(article.imageId, {resource_type: 'image'}, (error, result) => {
            if (error) {
                console.error('Cloudinary error:', error);
            }  
        });

        const result = await client.db('db').collection('articles').deleteOne({ _id: objectId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Article not found.' });
        }

        res.json({ message: 'Article deleted successfully.' });
    } catch (error) {
        console.error('Delete error:', error);

        // Handle invalid ObjectId errors
        if (error instanceof Error && error.message.includes('Argument passed in must be a single String of 12 bytes')) {
            return res.status(400).json({ message: 'Invalid ID format.' });
        }

        res.status(500).json({ message: 'Internal server error.' });
    }
};
