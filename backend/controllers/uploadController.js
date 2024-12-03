const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'articles', // Optional: Folder name in Cloudinary
    format: async (req, file) => {
      const allowedFormats = ['jpeg', 'png', 'jpg', 'gif'];
      let ext = path.extname(file.originalname).substring(1);
      if (allowedFormats.includes(ext)) {
        return ext;
      } else {
        throw new Error('Invalid file format');
      }
    },
    public_id: (req, file) => {
      return 'article_' + Date.now(); // File name on Cloudinary
    },
  },
});

// Set up Multer with the Cloudinary storage
const parser = multer({ storage: storage });

module.exports = parser;

