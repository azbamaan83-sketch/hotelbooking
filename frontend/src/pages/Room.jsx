import RoomCard from "../components/RoomCard";
import { useState } from "react";

function Rooms() {
  const [search, setSearch] = useState("");

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description: "Comfortable room with sea view.",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
      id: 2,
      name: "Executive Room",
      description: "Luxury executive suite.",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
      id: 3,
      name: "Presidential Suite",
      description: "Premium luxury experience.",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
    }
  ];

  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rooms-page">
      {/* HEADER */}
      <div className="rooms-header">
        <h2>🏨 Available Rooms</h2>
        <p>Choose your perfect stay from luxury options</p>

        <input
          type="text"
          placeholder="Search rooms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />
      </div>

      {/* ROOMS GRID */}
      <div className="rooms-grid">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))
        ) : (
          <p className="no-results">
            No rooms found 😢
          </p>
        )}
      </div>
    </div>
  );
}

export default Rooms;