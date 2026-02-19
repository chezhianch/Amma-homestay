const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const adminLogin = async (req, res) => {

  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.json({ success: false, message: "Admin not found" });
  }

  if (password !== admin.password) {
    return res.json({ success: false, message: "Invalid password" });
  }

  const token = jwt.sign(
    { id: admin._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    success: true,
    token
  });

};

module.exports = { adminLogin };   // ✅ FIXED
