import { useNavigate } from "react-router-dom";
import api from "../services/api";

function RoomCard({ room }) {
  const navigate = useNavigate();

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/bookings",
        {
          roomName: room.name,
          checkIn: new Date().toISOString(),
          checkOut: new Date().toISOString()
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Booking Successful");
    } catch (error) {
      console.log(error);

      alert("Please Login First ");
    }
  };

  return (
    <div className="room-card">
      <img
        src={room.image}
        alt={room.name}
        className="room-image"
      />

      <h3>{room.name}</h3>
      <p>{room.description}</p>
      <h4>${room.price}/night</h4>

      <button onClick={handleBooking}>
        Book Now
      </button>
    </div>
  );
}

export default RoomCard;