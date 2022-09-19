import "src/api/utils/dbConnect";
import HttpStatus from "http-status-codes";

import { disApproveUser } from "src/api/dbServices/user";

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    console.log("id", id);
    const response = await disApproveUser(id);
    res.status(HttpStatus.OK).json(response);
  } catch (err) {
    console.log("error", err);
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
}
