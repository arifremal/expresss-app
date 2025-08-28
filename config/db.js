import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGODB_URI =
    "mongodb+srv://aremal:aremal1234@cluster0.zseaq51.mongodb.net/express";
  await mongoose.connect(MONGODB_URI).then(() => {
    console.log("connected");
  });
};
