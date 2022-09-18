import { serialize } from "cookie";
import HttpStatus from "http-status-codes";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.access_token;

  if (!jwt) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "You are not logged in" });
  } else {
    const serialised = serialize("access_token", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
}
