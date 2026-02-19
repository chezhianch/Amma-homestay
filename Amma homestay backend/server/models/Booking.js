const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  name: String,
  email: String,
  phone: String,
  room: String,
  checkIn: String,
  checkOut: String,
  guests: Number,
  specialRequest: String,

  // ✅ NEW FIELD
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
