require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const sendComics = require('./sendComics');
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: "https://janaiqai.kz" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/', (req, res) => {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ message: 'Email введен неккоректно или не введен вовсе' });
    }
    sendComics(email);
    res.json({ message: `Комикс был отправлен, проверьте свою почту!` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

