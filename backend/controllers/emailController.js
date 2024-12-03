const sendComics = require('../mailjet/email').sendEmail;

exports.sendEmail = (req, res) => {
    const { email } = req.body;
    sendComics(email);
    res.json({ message: 'Комикс был отправлен, проверьте свою почту!' });
};
