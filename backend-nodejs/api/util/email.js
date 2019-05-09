'use strict';
const Mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);
const token = require('./authHelpers');

const welcomeMail = (mail, name) => {
  const sendRequest = Mailjet.post("send", {'version': 'v3.1'})
    .request({
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
            "Subject": "Your email flight plan!",
            "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
            "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
          }
        ]
    })
    sendRequest.then((result) => {
      console.log(result.body)
    }).catch((err) => {
      console.log(err)
    });
};

const resetPassword = (email, name) => {

};

module.exports = {
  welcomeMail,
  resetPassword
};
