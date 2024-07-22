import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://karnamgagan2923:gaganharshith@cluster0.rz259cd.mongodb.net/ecommerce');
    console.log(
      `Connected to database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};
export default connectDB;
