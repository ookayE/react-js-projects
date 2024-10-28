const RoomCard = ({ RoomCard }) => {
  return (
    <div class="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div class="flex flex-col sm:flex-row sm:space-x-4">
        <img
          src="images/rooms/room-1.jpg"
          alt="Grand Conference Hall"
          class="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
        />
        <div class="space-y-1">
          <h4 class="text-lg font-semibold">Grand Conference Hall</h4>
          <p class="text-sm text-gray-600">
            <span class="font-semibold text-gray-800"> Address:</span> 555
            California St, San Francisco, CA 94104
          </p>
          <p class="text-sm text-gray-600">
            <span class="font-semibold text-gray-800"> Availability:</span>9 AM
            - 5 PM
          </p>
          <p class="text-sm text-gray-600">
            <span class="font-semibold text-gray-800"> Price:</span>
            $150/hour
          </p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
        <a
          href="room.html"
          class="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
        >
          View Room
        </a>
      </div>
    </div>
  );
};

export default RoomCard;
