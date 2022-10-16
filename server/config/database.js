import mongoose from "mongoose";

const connectDB = async (url) => {
  return mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) {
        console.log(error, "error connecting to mongoDB");
      }
      console.log("mongoDB is connected");
    }
  );
};

export default connectDB;
