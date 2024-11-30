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
        TextPart: 'Спасибо за покупку комикса',
        HTMLPart:
          '<h3>Искренне благодарим вас за покупку нашего комикса</h3><br /> <p>По ссылке внизу вы сможете скачать комикс</p> <br /> <a href="https://e.pcloud.link/publink/show?code=XZOYaxZA3NdEqRvcChI67aYecWyt7DXuehy">Ccылка на PDF Файл</a> </br> <p>С уважением, команда Janaiqai</p>',
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
