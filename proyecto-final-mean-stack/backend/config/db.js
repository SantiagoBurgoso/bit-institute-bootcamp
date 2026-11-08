const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "mini_store"
    });

    console.log("MongoDB connected successfully");
}

module.exports = connectDB;