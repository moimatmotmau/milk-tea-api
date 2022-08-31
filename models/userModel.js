import mongoose from "mongoose";
import shortid from "shortid";

const user = mongoose.Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    username: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
    },
    phone: {
      type: "string",
      required: true,
    },
    fullName: {
      type: "string",
      required: true,
    },
    age: {
      type: "string",
      required: false,
    },
    avatar: {
      type: "string",
      required: false,
    },
    address: {
      type: "string",
      required: true,
    },
    cart: [],
    orders: [],
    role: {
      type: "string",
      default: "user",
    },
  },
  { timestamps: true }
);
export const userModel = mongoose.model("user", user, "users");
