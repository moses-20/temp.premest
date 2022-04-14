import mongoose from "mongoose";

const connection = {};

async function connectDB() {
  if (connection.isConnected) return;

  const db = await mongoose.connect(process.env.DBURL);

  connection.isConnected = db.connections[0].readyState;
}

export default connectDB;
