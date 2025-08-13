require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dBConnect = require("./db/dbconfig");

// Importing routes
const bookingRouter = require("./routes/booking");
const roomsRouter = require("./routes/rooms");
const userRouter = require("./routes/user");
const contactRouter = require("./routes/contact");

const app = express();
const port = process.env.PORT || 8000;

// Connect to Database
dBConnect();

// CORS configuration
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Body parser with higher limits ✅
app.use(express.json({ limit: "50mb" })); // for JSON
app.use(express.urlencoded({ limit: "50mb", extended: true })); // for form data

// Routes
app.use("/bookings", bookingRouter);
app.use("/rooms", roomsRouter);
app.use("/users", userRouter);
app.use("/contact", contactRouter);

// Default Route
app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ msg: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.message);
  res.status(500).json({ msg: "Internal Server Error" });
});

// Start the Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
