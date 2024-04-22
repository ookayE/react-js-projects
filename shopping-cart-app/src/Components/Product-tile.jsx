import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Store/Slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch(); // so we can dispatch Redux actions

  //this might be causing "returned the root state warning in console:
  const cart = useSelector((state) => state.cart);
  function handleAddToCard() {
    dispatch(addToCart(product));
  }
  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 mt-3 truncate text-gray-700 font-bold text-lg">
            {product.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCard
            }
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
