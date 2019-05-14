'use strict';
const Mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

// declare mailjet post
const sendRequest = Mailjet.post("send", {'version': 'v3.1'});

// welcome mail with account validation token
const welcomeMail = (mail, username, token) => {
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
            "Name": username
          }
        ],
        "Subject": "Welcome to Expensa",
        "TextPart": `Bonjour ${username},\n
                    Bienvenue sur l'application Expensa open source pour toujour.\n
                    Merci d'avoir prie part à l'aventure.\n
                    Suivez ce lien pour valider votre compte: ${process.env.EXPENSA_URL + '/confirm-account/' + token}\n
                    L'équipe Expensa.`,

        "HTMLPart": `<h3>Bonjour ${username},</h3><br/>
                    <p>Bienvenue sur l'application Expensa open source pour toujour.</p><br/>
                    <p>Merci d'avoir pris part à l'aventure.</p><br/>
                    <a style="padding: 10px 40px;border-radius: 3px;font-size: 1.125rem;font-family: Work Sans,Open Sans,Helvetica,Arial,sans-serif;
                    background-color: #4688f1;color: #fff;font-size: 1.4rem;text-decoration: none;"
                    href="${process.env.EXPENSA_URL + '/confirm-account/' + token}">Clickez pour valider votre compte</a><br/>
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

const resetPassword = (email, username, token) => {
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
            "Name": username
          }
        ],
        "Subject": "Expensa: Mot de passe oublié",
        "TextPart": `Mot de passe oublié,\n
                    Vous avez demandé une réinitialisation du mot de passe, veuillez utiliser ce lien:\n
                    Suivez ce lien pour valider votre compte: ${process.env.EXPENSA_URL + '/reset-password/' + token} \n
                    L'équipe Expensa.`,

        "HTMLPart": `<h3>Mot de passe oublié,</h3><br/>
                    <p>Vous avez demandé une réinitialisation du mot de passe, veuillez utiliser ce lien: </p><br/>
                    <a style="padding: 10px 40px;border-radius: 3px;font-size: 1.125rem;font-family: Work Sans,Open Sans,Helvetica,Arial,sans-serif;
                    background-color: #4688f1;color: #fff;font-size: 1.4rem;text-decoration: none;" href="${process.env.EXPENSA_URL + '/reset-password/' + token}"
                    >Réinitialisez votre mot de passe</a><br/>
                    <p>pour réinitialiser votre mot de passe</p><br/>
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
