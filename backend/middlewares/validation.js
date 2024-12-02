exports.validateEmail = (req, res, next) => {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ message: 'Email введен неккоректно или не введен вовсе' });
    }
    next();
};

