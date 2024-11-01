const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Update this path to your downloaded service account key
const rooms = require("./rooms.json"); // Ensure rooms.json is in the root directory

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function importRooms() {
  const batch = db.batch(); // Use batch for efficiency if there are many documents

  rooms.forEach((room) => {
    // Use Auto-ID or set a specific ID
    const roomRef = db.collection("rooms").doc(room.$id || undefined); // `room.$id` if you want custom IDs, otherwise leave undefined for Auto-ID

    // Copy all properties except `$id` into Firestore document
    const { $id, ...roomData } = room;
    batch.set(roomRef, roomData);
  });

  await batch.commit(); // Commit the batch write to Firestore
  console.log("Rooms imported successfully!");
}

importRooms().catch(console.error);
