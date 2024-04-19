export default function CartTile({ cartItem }) {
  return (
    <>
      <div className="flex items-center p-5 justify-between bg-red-300 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            alt={cartItem.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem.title}</h1>
            <p className="text-white font-exytrabold">{cartItem.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
