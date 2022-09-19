import { verify } from "jsonwebtoken";

const secret = process.env.JWT_KEY;

const verifyAdmin = async (jwt) => {
  const response = await verify(jwt, secret);
  return response ? true : false;
};
