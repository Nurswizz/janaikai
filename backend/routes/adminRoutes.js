const express = require('express');
const router = express.Router();
const verifyAdmin = require('../middlewares/verifyAdmin');
const parser = require('../controllers/uploadController').parser;
const { upload } = require('../middlewares/uploadArticle');
const { getArticles } = require('../middlewares/articles');
const { getEmailsInfo } = require('../middlewares/emails');
const { deleteArticle } = require('../middlewares/deleteArticle');

router.get('/admin-panel', verifyAdmin, (req, res) => {
    res.json({ message: 'Welcome to the admin panel' });
});
router.post('/admin-panel/upload', verifyAdmin, parser.single('image'), upload);
router.get('/admin-panel/articles', getArticles);
router.get("/admin-panel/emails", verifyAdmin, getEmailsInfo);
router.delete("/admin-panel/delete/:id", verifyAdmin, deleteArticle);
module.exports = router;
