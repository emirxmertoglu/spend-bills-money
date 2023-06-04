import { useState } from "react";
import { USDollar } from "@/utils/index";
import { useDispatch } from "react-redux";
import { buyProduct, sellProduct } from "@/reducers/billSlice";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleBuy = async () => {
    setCount((count) => count + 1);
    dispatch(
      buyProduct({
        id: product.id,
        name: product.title,
        price: product.price * (count + 1),
        quantity: count + 1,
      })
    );
  };

  const handleSell = () => {
    setCount((count) => count - 1);
    dispatch(
      sellProduct({ id: product.id, price: product.price * (count - 1) })
    );
  };

  return (
    <div className="px-4 py-5 flex flex-col gap-4 items-center bg-white rounded-sm shadow">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="h-[120px] object-contain"
        />
      </div>
      <div>
        <div className="text-xl font-bold text-slate-700 text-center">
          {product.title}
        </div>
        <div className="text-xl font-semibold text-green-500 text-center">
          {USDollar.format(product.price)}
        </div>
      </div>
      <div className="mt-auto w-full flex justify-between gap-2">
        <button
          className="w-full h-10 font-semibold text-center text-white bg-red-500  rounded-sm disabled:bg-slate-100 disabled:text-black"
          disabled={count == 0 ? true : false}
          onClick={handleSell}
        >
          Sell
        </button>
        <input
          className="w-full h-10 font-semibold text-center border border-gray-300 rounded-sm"
          type="text"
          value={count}
          readOnly
        />
        <button
          className="w-full h-10 font-semibold bg-green-500 text-white rounded-sm"
          onClick={handleBuy}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
