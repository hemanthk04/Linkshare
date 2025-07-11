const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const PASSCODE = process.env.SHARE_PASSCODE;

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

// Schema
const messageSchema = new mongoose.Schema({
  content: String,
  from: String, // NEW FIELD
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// POST /send
app.post("/send", async (req, res) => {
  const { content, passcode, from } = req.body;

  if (!content || !passcode)
    return res
      .status(400)
      .json({ success: false, message: "Missing content or passcode" });

  if (passcode !== PASSCODE)
    return res
      .status(401)
      .json({ success: false, message: "Invalid passcode" });

  await new Message({ content, from: from || "unknown" }).save();

  res.json({ success: true, message: "Message stored" });
});

// GET /messages
app.get("/messages", async (req, res) => {
  const messages = await Message.find().sort({ timestamp: -1 }).limit(50);
  res.json(messages);
});

// Optional: GET /
app.get("/", (req, res) => {
  res.send("🔗 LinkShare backend is running.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
