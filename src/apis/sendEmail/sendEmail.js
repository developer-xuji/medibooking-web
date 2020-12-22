
const sendEmail = (receiverAddress, content) => {

    const user = 'sunshinerxx@gmail.com'
    const pass = 'whAjnqp5g9C8BRJQ'
    const nodemailer = require('nodemailer')
  
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      secure: false,
      auth: {
        user: user,
        pass: pass
      }
    })
  
    const mailOptions = {
      from: 'info@MediBooking.com',
      to: `${receiverAddress}`,
      subject: 'Subject',
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
  
sendEmail("sunshinerxx@gmail.com", "Booking");
// export default sendEmail

