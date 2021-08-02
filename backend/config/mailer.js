const nodemailer = require("nodemailer");
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const htmlTemplate = fs.readFileSync(
  path.resolve(__dirname,'./../assets/templates/email_cita/email_cita.html'),{encoding:'utf-8'}
  );
const api = require('./../../src/config/env')
const mailUser = api.mailUser;
const mailPass = api.mailPass;

// Funcion principal de Transport
const createTrans = () => {

  const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: mailUser, // generated ethereal user
        pass: mailPass, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    transporter.verify().then(()=>{
        console.log("Backend Ready for send emails");
    })
    return transporter;
}

//Funcion de envio de correo
const sendEmail = async (user) => {
  
  const transporter = createTrans()    
  const info = await transporter.sendMail({
    from: `"Animal Care Foundation 🐶" <${mailUser}>`, // sender address
    to: `${user.email}`, // list of receivers
    subject: `Welcome to Animal Care Foundation - ${user.name} ✔`, // Subject line
    // text: "Hello world?", // plain text body
    // html: "We are <b>Animal Care Foundation</b>", // html body
    html: ejs.render(htmlTemplate), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  return
}

//Public functions
module.exports.sendEmail = sendEmail;