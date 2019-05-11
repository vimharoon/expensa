'use strict';
const Mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

// declare mailjet post
const sendRequest = Mailjet.post("send", {'version': 'v3.1'});

// welcome mail with account validation token
const welcomeMail = (mail, name, token) => {
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
                      Suivez ce lien pour valider votre compte: ${process.env.EXPENSA_URL + '/confirm-account/' + token}\n
                      L'équipe Expensa.`,

          "HTMLPart": `<h3>Bonjour ${name},</h3><br/>
                      <p>Bienvenue sur l'application Expensa open source pour toujour.</p><br/>
                      <p>Merci d'avoir prie part à l'aventure.</p><br/>
                      <a href="${process.env.EXPENSA_URL + '/confirm-account/' + token}">Clickez pour valider votre compte.</a>!<br/>
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

const resetPassword = (email, token) => {
  const message = {
    "Messages":[
      {
        "From": {
          "Email": process.env.EXPENSA_MAIL,
          "Name": "Expensa"
        },
        "To": [
          {
            "Email": email,
          }
        ],
        "Subject": "Expensa: Mot de passe oublié",
        "TextPart": `Mot de passe oublié,\n
                    Pour réinitialiser votre mot de passe, remplissez ce formulaire:\n
                    Suivez ce lien pour valider votre compte: ${process.env.EXPENSA_URL + '/reset-password/' + token} \n
                    Ou suivez ce lien: ${process.env.EXPENSA_URL + '/reset-password/' + token} \n
                    L'équipe Expensa.`,

        "HTMLPart": `<h3>Mot de passe oublié,</h3><br/>
                    <p>Pour réinitialiser votre mot de passe, remplissez ce formulaire: </p><br/>
                    <a href="${process.env.EXPENSA_URL + '/reset-password/' + token.generateTokenSecret()}">Clickez pour valider votre compte.</a><br/>
                    <p>Ou suivez ce lien: ${process.env.EXPENSA_URL + '/reset-password/' + token}</p><br/>
                    <p><em>May the force be with you!<em></p><br/>
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

module.exports = {
  welcomeMail,
  resetPassword
};
