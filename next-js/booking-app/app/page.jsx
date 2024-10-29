import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms.json";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <>
      <Heading title="Available Rooms" />
      {rooms && rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} />)
      ) : (
        <p>No Rooms Available</p>
      )}
    </>
  );
}
