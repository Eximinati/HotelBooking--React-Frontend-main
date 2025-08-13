// createAdmin.js

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Replace this with the actual path to your User model
const User = require("./models/User");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    const email = "qaisarali10qaisarali10@gmail.com";
    const password = "11231123";

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      console.log("⚠️ Admin user already exists.");
      process.exit(0);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin user
    const adminUser = new User({
      firstname: "Qaisar",
      lastname: "Ali",
      username: "adminqaisar",
      email,
      password: hashedPassword,
      role: "admin",
      phone: "03265456196",
      address: "Admin Street 1",
    });

    await adminUser.save();
    console.log("✅ Admin user created successfully.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err.message);
    process.exit(1);
  });
