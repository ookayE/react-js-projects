import Image from "next/image";
import Link from "next/link";

const RoomCard = ({ room }) => {
  return (
    <div className="flex justify-between shadow rounded-lg p-4 mt-4 sm:items-center sm:flex-row ">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <Image
          src={`/images/rooms/${room.image}`}
          width={400}
          height={100}
          alt={room.name}
          className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
        />
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">{room.name}</h4>
          <p className="text-sm text-gray-600">{room.address}</p>
          <p className="text-sm text-gray-600">
            {`Availbility: ${room.availability} `}
          </p>
          <p className="text-sm text-gray-600">${room.price_per_hour}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 sm:w-auto hover:bg-blue-700"
          href={`/rooms/${room.$id}`}
        >
          View Room
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
