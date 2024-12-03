const express = require('express');
const router = express.Router();
const verifyAdmin = require('../middlewares/verifyAdmin');
const parser = require('../controllers/uploadController');
const { upload } = require('../middlewares/upload');
const { getArticles } = require('../middlewares/articles');
const { getEmailsInfo } = require('../middlewares/emails');

router.get('/admin-panel', verifyAdmin, (req, res) => {
    res.json({ message: 'Welcome to the admin panel' });
});
router.post('/admin-panel/upload', verifyAdmin, parser.single('image'), upload);
router.get('/admin-panel/articles', verifyAdmin, getArticles);
router.get("/admin-panel/emails", verifyAdmin, getEmailsInfo);

module.exports = router;
