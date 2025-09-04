const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: "vishalrajpurohit02@gmail.com",
//   from: "vishalrajpurohit02@gmail.com",
//   subject: "This is my first creation",
//   text: "I hope this one actutally go ro you",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "vishalrajpurohit02@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "vishalrajpurohit02@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you back sometimee soon`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
