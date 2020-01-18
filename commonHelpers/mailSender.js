const nodemailer = require("nodemailer");
const keys = require("../config/keys");
const getConfigs = require("../config/getConfigs");

module.exports = async (subscriberMail, letterSubject, letterHtml, res) => {
  const configs = await getConfigs();

  //authorization for sending email
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
      // process.env.NODE_ENV === "production"
      //   ? configs.production.email.mailService
      //   : configs.development.email.mailService,
    auth: {
      user: 'twearOnlineShop@gmail.com',
        // process.env.NODE_ENV === "production"
        //   ? configs.production.email.mailUser
        //   : configs.development.email.mailUser,
      pass: 'twearonlineshop'
        // process.env.NODE_ENV === "production"
        //   ? configs.production.email.mailPassword
        //   : configs.development.email.mailPassword
    },
    secure: false,
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from:'twearOnlineShop@gmail.com',
      // process.env.NODE_ENV === "production"
      //   ? configs.production.email.mailUser
      //   : configs.development.email.mailUser,
    to: subscriberMail,
    subject: letterSubject,
    html: letterHtml
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
};
