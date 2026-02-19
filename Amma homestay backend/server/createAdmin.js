const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// ✅ IMPORTANT FIX — load env from parent folder
require("dotenv").config({ path: "../.env" });

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

  const existingAdmin = await Admin.findOne({
    email: "admin@ammahomestay.com"
  });

  if (existingAdmin) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await Admin.create({
    email: "admin@ammahomestay.com",
    password: hashedPassword
  });

  console.log("✅ Admin created successfully");

  process.exit();

})
.catch(err => {
  console.log(err);
  process.exit();
});
