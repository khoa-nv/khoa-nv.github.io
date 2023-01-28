const functions = require("firebase-functions");
const nodeMailder = require("nodemailer");
require("dotenv").config();

const {
  SENDER_AUTH_EMAIL,
  SENDER_PASSWORD,
  SENDER_NOTIFICATION_EMAIL,
  RECEIVE_NOTIFICATION_EMAIL,
} = process.env;

console.log("*************************************");
console.log(
  SENDER_AUTH_EMAIL,
  SENDER_PASSWORD,
  SENDER_NOTIFICATION_EMAIL,
  RECEIVE_NOTIFICATION_EMAIL
);
console.log("*************************************");

exports.sendEmail = functions
  .region("asia-southeast1")
  .firestore.document("messages/{docID}")
  .onCreate((snap, ctx) => {
    const data = snap.data();
    const { fullName, email, message } = data;

    const authData = nodeMailder.createTransport({
      service: "iCloud",
      port: 587,
      auth: {
        user: SENDER_AUTH_EMAIL,
        pass: SENDER_PASSWORD,
      },
    });
    authData
      .sendMail({
        from: `Khoa Nguyen Notification <${SENDER_NOTIFICATION_EMAIL}>`,
        to: RECEIVE_NOTIFICATION_EMAIL,
        subject: `${fullName} just sent you a message`,
        text: `You have a new message from ${fullName} <${email}>: ${message}`,
        html: `You have a new message from ${fullName} <${email}>: ${message}`,
      })
      .then((res) => {
        console.log("Email sent successfully!");
      })
      .catch((err) => console.log(err));
  });
