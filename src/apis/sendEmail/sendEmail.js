
const sendEmail = (receiverAddress, content) => {
    const nodemailer = require('nodemailer')
  
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      secure: false,
      auth: {
        user: 'sunshinerxx@gmail.com',
        pass: 'whAjnqp5g9C8BRJQ'
      }
    })
  
    const mailOptions = {
      from: 'info@pepisandbox.com',
      to: `${receiverAddress}`,
      subject: 'Sending Email using Node.js',
      text: 'That was easy!',
      html: `<h1>${content}</h1>`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  
//   sendEmail("sunshinerxx@gmail.com", "Hello");
export default sendEmail

