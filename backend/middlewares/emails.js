require('dotenv').config();

const axios = require('axios');

const getEmailsInfo = async (req, res) => {
    try {
            const { data } = await axios.get('https://api.mailjet.com/v3/REST/contact', {
                auth: {
                    username: process.env.MJ_APIKEY_PUBLIC,
                    password: process.env.MJ_APIKEY_PRIVATE,
                }, 
                params: {
                    Limit: 1000,
                }
            });
            return res.json(data);
        }catch (err) {
            console.error('Get emails error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
    }
}

module.exports = { getEmailsInfo };