const express = require('express');
const router = express.Router();
const verifyAdmin = require('../middlewares/verifyAdmin');

router.get('/admin-panel', verifyAdmin, (req, res) => {
    res.json({ message: 'Welcome to the admin panel' });
});

module.exports = router;
