"use server"
const mongoose = require("mongoose");

const dbURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/razu";

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

const ConnectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(dbURL).then((mongoose) => {
      mongoose.connection.setMaxListeners(20);

      mongoose.connection.on("error", (error) => {
        console.log("Mongoose connection error:", error);
      });

      mongoose.connection.once("open", () => {
        console.log("Connected to DB!");
      });

      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

module.exports = ConnectDB;
