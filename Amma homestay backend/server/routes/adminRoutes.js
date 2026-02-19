const express = require("express");
const router = express.Router();

const adminAuth = require("../middleware/authMiddleware");
const Booking = require("../models/Booking");

const { adminLogin } = require("../controllers/adminController");


// =========================
// LOGIN
// =========================
router.post("/login", adminLogin);


// =========================
// GET BOOKINGS
// =========================
router.get("/bookings", adminAuth, async (req, res) => {

  try {

    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      bookings
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});


// =========================
// ACCEPT BOOKING
// =========================
router.put("/bookings/:id/accept", adminAuth, async (req, res) => {

  try {

    await Booking.findByIdAndUpdate(req.params.id, {
      status: "Accepted"
    });

    res.json({ success: true });

  } catch (err) {

    res.status(500).json({ success: false });

  }

});


// =========================
// REJECT BOOKING
// =========================
router.put("/bookings/:id/reject", adminAuth, async (req, res) => {

  try {

    await Booking.findByIdAndUpdate(req.params.id, {
      status: "Rejected"
    });

    res.json({ success: true });

  } catch (err) {

    res.status(500).json({ success: false });

  }

});


// =========================
// DELETE BOOKING
// =========================
router.delete("/bookings/:id", adminAuth, async (req, res) => {

  try {

    await Booking.findByIdAndDelete(req.params.id);

    res.json({ success: true });

  } catch (err) {

    res.status(500).json({ success: false });

  }

});


module.exports = router;
