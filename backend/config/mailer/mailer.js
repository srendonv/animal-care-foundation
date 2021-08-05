const nodemailer = require("nodemailer");
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const htmlTemplate = fs.readFileSync(
  path.resolve(__dirname,'./../../assets/templates/email_cita/email_cita.html'),{encoding:'utf-8'} 
);
let filepath = path.resolve(__dirname,'./sent/data.json');
const api = require('../../../src/config/env');
const { isObject } = require("util");
const mailUser = api.mailUser;
const mailPass = api.mailPass;

//Create file data.json with JSON table Structure
let obj = { table: [] };
let data_parsed = JSON.stringify(obj, null, 2);

if (!fs.existsSync(filepath)) {
  fs.writeFileSync(filepath,data_parsed, {encoding: "utf8",flag: "a"},(err)=>{
    if (err){
      throw err;
    }
    console.log("File data.json for mailer sents is first time created!")
    console.log("JSON data is saved!")
  })
}

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

    // console.log("Message sent: %s", info.messageId);
   const response = ("Message sent: " + String(info.messageId));
   console.log(response)
   
  //Saving response to JSON 
  //function write data to JSON table Structure
  let writeData = (filepath) =>{
    fs.readFile(filepath,(err , data) => {
      if(err){
        console.log(err);
      } else{

        let obj = JSON.parse(data);

        obj.table.push({
          id: Date.now(), 
          respuesta:response
        });
        
        let data_parsed = JSON.stringify(obj, null, 2);
    
        fs.writeFile(filepath,data_parsed, {encoding: "utf8",flag: "w"},(err)=>{
          if (err){
            throw err;
          }
          console.log("File data.json for mailer sents is already created!")
          console.log("JSON data is saved!")
        })
       }
      } 
    );

  } 
  //check if file exists!
  fs.access(filepath, error => {
    if (!error) {
        // The check succeeded
        console.log("The check succeeded")
        writeData(filepath);
    } else {
        // The check failed
        console.log("The check failed");
        // createFile(file);
    }
    }); 
   
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

//Public functions
module.exports.sendEmail = sendEmail;