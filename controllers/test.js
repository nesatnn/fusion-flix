

// const Mailjet = require('node-mailjet');

// exports.sendtestmail = async (req, res) => {
//   try {
//     const mailjet = Mailjet.apiConnect(
//       process.env.MJ_APIKEY_PUBLIC,
//       process.env.MJ_APIKEY_PRIVATE
//     );

//     const request = mailjet
//       .post('send', { version: 'v3.1' })
//       .request({
//         Messages: [
//           {
//             From: {
//               Email: "nesatnayem042@gmail.com",
//               Name: "Nesat"
//             },
//             To: [
//               {
//                 Email: "nayemnesat@gmail.com",
//                 Name: "Nayem"
//               }
//             ],

//             Subject: "Fusition Flix Email Test",
//             TextPart: "Hi Nesat this is success",
//             HTMLPart: "<h1>Hi Nesat</h1>"
//           }
//         ]
//       });

//     const result = await request;
//     console.log(result.body);

//     res.status(200).json({ success: true, message: "Email sent successfully" });
//   } catch (error) {
//     console.log(error.statusCode);

//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// };


// v2 

// const Mailjet = require('node-mailjet');

// exports.sendtestmail = async (req, res, mailOptions) => {
//   try {
//     const mailjet = Mailjet.apiConnect(
//       process.env.MJ_APIKEY_PUBLIC,
//       process.env.MJ_APIKEY_PRIVATE
//     );

//     const request = mailjet
//       .post('send', { version: 'v3.1' })
//       .request({
//         Messages:[
//           {
//             From: {
//               Email: mailOptions.from
//             },
//             To: [
//               {
//                 Email: mailOptions.to
//               }
//             ],
//             Subject: mailOptions.subject,
//             HTMLPart: mailOptions.html
//           }
//         ]
//       });

//     const result = await request;
//     console.log(result.body);

//     res.status(200).json({ success: true, message: "Email sent successfully" });
//   } catch (error) {
//     console.log(error.statusCode);

//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// };


const Mailjet = require('node-mailjet');

// const sendtestmail = async (mailOptions) => {
  exports.sendtestmail = async (mailOptions) => {
  try {
    const mailjet = Mailjet.apiConnect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE
    );

    const request = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages:[
          {
            From: {
              Email: mailOptions.from
            },
            To: [
              {
                Email: mailOptions.to
              }
            ],
            Subject: mailOptions.subject,
            HTMLPart: mailOptions.html
          }
        ]
      });

    const result = await request;
    console.log(result.body);
    return true; // Sending email succeeded
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    return false; // Sending email failed
  }
};