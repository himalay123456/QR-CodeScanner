import "src/api/utils/dbConnect";
import HttpStatus from "http-status-codes";
import middleware from "src/api/middleware/middleware";
import nextConnect from "next-connect";

import { createUser } from "src/api/dbServices/user";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const files = req.files;
    const body = req.body;

    // do stuff with files and body
    const userDetails = { ...files, ...body };
    const response = await createUser(userDetails);
    res.status(HttpStatus.OK).json(response);
  } catch (err) {
    console.log("error", err);
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
