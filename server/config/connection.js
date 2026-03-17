const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/choice-shopping",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//show if teh connection is working or not
mongoose.connection.on("connected", () => {
  console.log(
    "✅ MongoDB connected:",
    process.env.MONGODB_URI ? "Atlas" : "Local"
  );
});

mongoose.connection.on("error", (err) => {
  console.log("❌ MongoDB connection error:", err);
});

module.exports = mongoose.connection;
