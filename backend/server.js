const express = require("express");

const { chats } = require("./data/data");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
connectDB();

const app = express();
app.use(express.json()); //To accept JSON Data

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.use("/api/user/", userRoutes);
app.use(notFound);
app.use(errorHandler);
// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   //console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id == req.params.id);
//   res.send(singleChat);
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
