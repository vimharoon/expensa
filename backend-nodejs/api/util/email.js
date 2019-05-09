'use strict';
const Mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);
const token = require('./authHelpers');

// declare mailjet post
const sendRequest = Mailjet.post("send", {'version': 'v3.1'});

// welcome mail with account validation token
const welcomeMail = (mail, name) => {
  const message = {
      "Messages":[
        {
          "From": {
            "Email": process.env.EXPENSA_MAIL,
            "Name": "Expensa"
          },
          "To": [
            {
              "Email": mail,
              "Name": name
            }
          ],
          "Subject": "Welcome to Expensa",
          "TextPart": `Bonjour ${name},\n
                      Bienvenue sur l'application Expensa open source pour toujour.\n
                      Merci d'avoir prie part à l'aventure.\n
                      Suivez ce lien pour valider votre compte: ${process.env.EXPENSA_URL/token}\n
                      L'équipe Expensa.`,

          "HTMLPart": `<h3>Bonjour ${name},</h3><br/>
                      <p>Bienvenue sur l'application Expensa open source pour toujour.</p><br/>
                      <p>Merci d'avoir prie part à l'aventure.</p><br/>
                      <a href="${process.env.EXPENSA_URL/token}">Clickez pour valider votre compte.</a>!<br/>
                      <p><em>May the force be with you!<em>🎟</p><br/>
                      <p>L'équipe Expensa.</p>`
        }
      ]
  };
  sendRequest.request(message).then((result) => {
    console.log(result.body);
  }).catch((err) => {
    console.log(err.message);
  });
};

const resetPassword = (email, name) => {

};

module.exports = {
  welcomeMail,
  resetPassword
};
