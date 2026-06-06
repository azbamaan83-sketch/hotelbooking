const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    roomName: String,

    checkIn: String,

    checkOut: String
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);