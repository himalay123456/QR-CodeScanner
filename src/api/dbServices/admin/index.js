const UserModel = require("../../models/user");
module.exports = {
  getAllUsers: async (body) => {
    const user = await UserModel.find({}).sort({ createdAt: -1 });
    return { user };
  },
};
