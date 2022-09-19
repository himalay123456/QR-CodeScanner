const UserModel = require("../../models/user");
module.exports = {
  createUser: async (body) => {
    const user = await UserModel.create(body);
    return { user };
  },
  approveUser: async (id) => {
    return await UserModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        active: true,
      },
      {
        new: true,
        upsert: false,
      }
    );
  },
  disApproveUser: async (id) => {
    return await UserModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        active: false,
      },
      {
        new: true,
        upsert: false,
      }
    );
  },
  userDetails: async (id) => {
    return await UserModel.findById(id);
  },
};
