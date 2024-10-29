import Heading from "@/components/Heading";
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

      <div className="flex flex-col">
        <div className="flex space-x-2 items-center py-4">
          <FaChevronLeft />
          <Link href={"/"}>Back to Rooms</Link>
        </div>
        <div className="flex">
          <Image />
          <div className="flex flex-col">
            <p>{room.description}</p>
            <p>
              <span className="font-semibold">Size: </span>
              {room.size}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomPage;
