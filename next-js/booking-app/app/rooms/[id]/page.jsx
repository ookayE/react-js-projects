import Heading from "@/components/Heading";
import BookingForm from "@/components/BookingForm";
import rooms from "@/data/rooms.json";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const RoomPage = ({ params }) => {
  const { id } = params;
  const room = rooms.find((room) => room.$id === id);

  if (!room) {
    return <Heading title="Room Not Found" />;
  }

  return (
    <>
      <Heading title={room.name} />

      <div className="bg-white shadow rounded-lg p-6">
        <Link
          href={"/"}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <FaChevronLeft />
          <span>Back to Rooms</span>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-6 mt-2">
        <Image
          className="rounded-lg w-full sm:w-1/3 h-64 object-cover"
          src={`/images/rooms/${room.image}`}
          width={400}
          height={100}
        />
        <div className="mt-4 sm:flex-1">
          <p className="text-gray-800 mb-4">{room.description}</p>
          <p>
            <span className="font-semibold">Size: </span>
            {room.sqft} sq ft
          </p>
          <p>
            <span className="font-semibold">Availability: </span>
            {room.availability}
          </p>
          <p>
            <span className="font-semibold">Price: </span>
            {`$${room.price_per_hour}`}
          </p>
          <p>
            <span className="font-semibold">Address: </span>
            {room.address}
          </p>
        </div>
      </div>

      <BookingForm room={room} />
    </>
  );
};

export default RoomPage;
