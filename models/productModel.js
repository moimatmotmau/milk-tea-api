import mongoose from "mongoose";
import shortid from "shortid";

const product = mongoose.Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    name: {
      type: "string",
      required: true,
    },
    price: {
      type: "number",
      required: true,
      default: 0,
    },
    salePrice: {
      type: "number",
      required: false,
    },
    image: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    sizeM: {
      type: "boolean",
      required: true,
    },
    sizeL: {
      type: "boolean",
      required: true,
    },
    hot: {
      type: "boolean",
      required: true,
    },
  },
  { timestamps: true }
);
export const productModel = mongoose.model("product", product);
