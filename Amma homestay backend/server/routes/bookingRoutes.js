const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");


// CREATE BOOKING (PUBLIC)
router.post("/", async (req, res) => {

  try {

    const booking = new Booking(req.body);

    await booking.save();

    res.json({
      success: true,
      message: "Booking successful"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});


// ADMIN GET BOOKINGS (protected)
const adminAuth = require("../middleware/authMiddleware");

router.get("/", adminAuth, async (req, res) => {

  try {

    const bookings = await Booking.find();

    res.json({
      success: true,
      bookings
    });

  } catch (error) {

    res.status(500).json({
      success: false
    });

  }

});

module.exports = router;
