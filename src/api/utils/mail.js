const mail = require("@sendgrid/mail");
const QR = require("qrcode");
const UserModel = require("../models/user");

mail.setApiKey(process.env.SENDGRID_KEY);

export default async (body) => {
  const dataImage = await QR.toDataURL(
    `${process.env.ENDPOINT}/admin/verify-user/${body._id}`
  );
  await UserModel.findOneAndUpdate(
    {
      _id: body._id,
    },
    {
      qrCode: dataImage,
    },
    {
      new: true,
      upsert: false,
    }
  );
  // console.log("mail", dataImagebody);
  const imageb64 = dataImage.replace("data:image/png;base64,", "");

  const response = await mail.send({
    to: body.email,
    from: "himalayshankar32@gmail.com",
    subject: "Invitation Accepted!",
    text: "QR CODE",
    html: `Hii ${body.name}. You are successfully approved to visit the event. Please show the QR code image sent in attachement when visit to the event for authentication. `,
    attachments: [
      {
        filename: "QR code.png",
        content: imageb64,
        content_id: "myimagecid",
      },
    ],
  });
};
