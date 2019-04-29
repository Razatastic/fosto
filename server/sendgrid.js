const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendEmail(toEmail, fromEmail, content) {
  const msg = {
    to: toEmail,
    from: fromEmail,
    subject: "Fosto Update",
    text: content,
    html: "<strong>" + content + "</strong>"
  };
  sgMail.send(msg);
}

export default sendEmail;
