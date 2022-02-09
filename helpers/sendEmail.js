const nodemailer = require("nodemailer");

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "ilona.kavitska@meta.ua",
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "ilona.kavitska@meta.ua",
  };
  await transporter.sendMail(email);
};

module.exports = sendEmail;