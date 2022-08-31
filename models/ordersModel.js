import mongoose from "mongoose";
import shortid from "shortid";

const orders = mongoose.Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    username: {
      type: "string",
      required: true,
    },
    phone: {
      type: "string",
      required: true,
    },
    address: {
      type: "string",
      required: true,
    },
    orders: {
      type: "array",
      required: true,
    },
    paid: {
      type: "boolean",
      required: true,
    },
    status: {
      type: "string",
      required: true,
    },
    fullName: {
      type: "string",
      required: true,
    },
    time: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: {
      type: "string",
      required: true,
    },
  }
);
export const ordersModel = mongoose.model("order", orders);
