const {client} = require('../config/db');

exports.upload = async (req, res) => {
    try {
      // Validate that req.file and req.body exist
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
      }
      if (!req.body.link || !req.body.title) {
        return res.status(400).json({ message: 'Title and link are required.' });
      }
  
      const postData = {
        imageUrl: req.file.path,  
        imageId: req.file.filename, 
        link: req.body.link,
        title: req.body.title,
      };

      await client.db('db').collection('articles').insertOne(postData);
  
      res.status(201).json({ message: 'Article uploaded successfully' });
    } catch (err) {
      console.error('Upload error:', err);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };
  
