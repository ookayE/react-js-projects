import MessageCard from "@/components/MessageCard";
import connectDB from "@/config/db";
import Message from "@/models/Message";
import "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";
import { getSessionUser } from "@/utils/getSessionUser";

const MessagesPage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userID } = sessionUser;

  const readMessages = await Message.find({
    recipient: userID,
    read: true,
  })
    .sort({ createdAt: -1 })
    .populate("sender", "username")
    .populate("property", "name")
    .lean();

  const unreadMessages = await Message.find({
    recipient: userID,
    read: false,
  })
    .sort({ createdAt: -1 })
    .populate("sender", "username")
    .populate("property", "name")
    .lean();

  //create array of both read and unread messages
  const messages = [
    ...unreadMessages.map((messageDocument) =>
      convertToSerializableObject(messageDocument)
    ),
    ...readMessages.map((messageDocument) =>
      convertToSerializableObject(messageDocument)
    ),
  ];

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24 max-w-6xl">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your messages</h1>
          <div className="space-y-4">
            {messages.length === 0 ? (
              <p>You have no messages</p>
            ) : (
              messages.map((message) => (
                // <h3 key={message._id}>{message.name}</h3>
                <MessageCard key={message._id} message={message} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesPage;
