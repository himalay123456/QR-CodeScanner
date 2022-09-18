import "src/api/utils/dbConnect";

export default async (req, res) => {
  console.log("body", req.body);
  return res.json({
    message: "Success",
  });
};
