const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { client } = require('../config/db');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admins = client.db("db").collection("admins");
        const admin = await admins.findOne({ email });

        if (!admin) {
            return res.status(400).json({ message: 'Пользователь не найден' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Неверный пароль' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '3h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
