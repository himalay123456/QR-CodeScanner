import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import HttpStatus from "http-status-codes";

const secret = process.env.JWT_KEY;

export default async function (req, res) {
  try {
    const { phone, password } = req.body;

    if (phone === 1234567890 && password === "admin@123") {
      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
          phone: phone,
        },
        secret
      );

      const serialised = serialize("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialised);

      res.status(200).json({ message: "Success!" });
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.log("error", err);
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
}
