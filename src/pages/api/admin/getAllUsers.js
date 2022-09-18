import "src/api/utils/dbConnect";
import HttpStatus from "http-status-codes";

import { getAllUsers } from "src/api/dbServices/admin";

export default async function (req, res) {
  try {
    const response = await getAllUsers();
    res.status(HttpStatus.OK).json(response);
  } catch (err) {
    console.log("error", err);
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
}
