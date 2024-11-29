require('dotenv').config();
const mailjetClient = require('node-mailjet');

  const mailjet = mailjetClient.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  );
  const sendEmail = (email) => {
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: process.env.email,
          Name: 'Janaiqai team',
        },
        To: [
          {
            Email: email,
            Name: 'You',
          },
        ],
        Subject: 'Комикс от Janaiqai',
        TextPart: 'Срасибо за покупку комикса',
        HTMLPart:
          '<h3>Искренне благодарим вас за покупку нашего комикса</h3><br /> <p>Ваш комикс прикреплен к этому письму в виде PDF файла</p> <br /> <p>С уважением, команда Janaiqai</p>',
      },
    ],
  })
  request
    .then(result => {
      console.log(result.body)
    })
    .catch(err => {
      console.log(err.statusCode)
    })
}
module.exports = sendEmail;