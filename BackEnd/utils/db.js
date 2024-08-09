import mongoose from "mongoose";

const coonectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb is connected");
  } catch (err) {
    console.log("db coonect error");
  }
};

export default coonectDB;
