import amqp from "amqplib";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const startSendOtpConsumer = async () => {
  try {
//    const connection = await amqp.connect({
//   protocol: "amqps", // 🔁 Change to amqps for CloudAMQP
//   hostname: process.env.Rabbitmq_Host,   // e.g. 'owl.rmq.cloudamqp.com'
//   port: 5671,                             // ✅ CloudAMQP uses port 5671 for TLS
//   username: process.env.Rabbitmq_Username,
//   password: process.env.Rabbitmq_Password,
//   vhost: process.env.Rabbitmq_Vhost       // Optional, usually a short string like 'abcde'
// });
if (!process.env.AMQP_URL) {
  throw new Error("AMQP_URL environment variable is not defined");
}
const connection = await amqp.connect(process.env.AMQP_URL);


    const channel = await connection.createChannel();

    const queueName = "send-otp";

    await channel.assertQueue(queueName, { durable: true });

    console.log("Mail Service consumer started, listening for otp emails");

    channel.consume(queueName, async (msg) => {
      if (msg) {
        try {
          const { to, subject, body } = JSON.parse(msg.content.toString());

          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
              user: process.env.USER,
              pass: process.env.PASSWORD,
            },
          });

          await transporter.sendMail({
            from: "Chat app",
            to,
            subject,
            text: body,
          });

          console.log(`OTP mail sent to ${to}`);
          channel.ack(msg);
        } catch (error) {
          console.log("Failed to send otp", error);
        }
      }
    });
  } catch (error) {
    console.log("Failed to start rabbitmq consumer", error);
  }
};
