const Booking = require("../models/Booking");

exports.createBooking = async (
  req,
  res
) => {
  try {
    const booking =
      await Booking.create({
        ...req.body,
        userId: req.user.id
      });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getBookings = async (
  req,
  res
) => {
  try {
    const bookings =
      await Booking.find({
        userId: req.user.id
      });

    res.json(bookings);
  } catch (error) {
    res.status(500).json(error);
  }
};