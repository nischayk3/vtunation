const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");
//const details = require('../../server/details.json');
const db = "mongodb+srv://nischayk3:nishyoyo@cluster0-engep.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});

router.get('/', (req,res) => {
    res.send('from api routes')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
      }
    })
  })

  router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid Email')
        } else 
        if ( user.password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: user._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      }
    })
  })
module.exports =router

router.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'nischayk3@gmail.com',
      pass: 'nishyoyo'
    }
  });

  let mailOptions = {
    from: '"VTU NATION"<example.gimail.com>', // sender address
    to: "nischayk3@gmail.com", // list of receivers
    subject: "Wellcome to VTU NATION  👻", // Subject line
    html: `<h1>Hi ${user.firstName}</h1><br><p>Message is ${user.message}</p>

    <h4>Thanks for joining us</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
// router.post("/sendmails", (req, res) => {
//   console.log("request came");
//   let user = req.body;
//   sendMails(user, info => {
//     console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
//     res.send(info);
//   });
// });

// async function sendMails(user, callback) {
//   // create reusable transporter object using the default SMTP transport
  
//   let transporters = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'nischayk3@gmail.com',
//       pass: 'nishyoyo'
//     }
//   });

//   let mailOption = {
//     from: '"VTU NATION"<example.gimail.com>', // sender address
//     to: user.email, // list of receivers
//     subject: "Wellcome to VTU NATION  👻", // Subject line
//     html: `<h1>Hi ${user.firstName}</h1><br><p></p>

//     <h4>Thanks for joining us</h4>`
//   };

//   // send mail with defined transport object
//   let infos = await transporters.sendMails(mailOption);

//   callback(infos);
// }