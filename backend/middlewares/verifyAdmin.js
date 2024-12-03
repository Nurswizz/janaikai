const jwt = require('jsonwebtoken');
const { client } = require('../config/db');
const { ObjectId } = require('mongodb');

const verifyAdmin = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
        const admins = client.db("db").collection("admins");
        const admin_id = new ObjectId(decoded.id);

        const admin = await admins.findOne({ _id: admin_id });
        if (!admin) {
            return res.status(403).json({ message: 'Access denied. Admin not found.' });
        }

        req.admin = admin; 
        next();
    } catch (err) {
        console.error('Token verification failed:', err.message);  // Log error for debugging
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = verifyAdmin;
