"use server";
import { createTransport } from "nodemailer";

const transport = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

interface dType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = async (data: string) => {
  try {
    const contactData: dType = JSON.parse(data);
    const { name, email, phone, message } = contactData;
    await transport.sendMail({
      from: email,
      to: "razushrestha9335@gmail.com",
      subject: "Contact From Your Website",
      text: `
      ${message}\n\n
      ${name}\n
      ${phone}   
      `,
    });
    return "Message Sent Successfully!";
  } catch (error: any) {
    console.log(error);
    return error?.message;
  }
};

export default Contact;
