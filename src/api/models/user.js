import mongoose from "mongoose";
import multer from "multer";
const path = require("path");
const AVATAR_PATH = path.join("/uploads/users/avatars");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    organisation: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

//static function
UserSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
  "profilePic"
);
UserSchema.statics.avatarPath = AVATAR_PATH;

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
