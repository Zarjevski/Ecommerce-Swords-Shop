import  mongoose from "mongoose";

const connectDB = async(url, config) => {
  return mongoose.connect(url, config, (error)=>{
    if (error) {
      console.log(error, 'error connecting to mongoDB');
    }
    console.log('mongoDB is connected');
  });
};

export default connectDB ;
