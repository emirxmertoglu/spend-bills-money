import { useState } from "react";
import { USDollar } from "@/utils/index";

const Product = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="px-4 py-5 flex flex-col gap-4 items-center bg-white rounded-sm shadow">
      <div>
        <img
          src="https://picsum.photos/200"
          alt="img"
          className="h-[120px] object-contain"
        />
      </div>
      <div>
        <div className="text-xl font-bold text-slate-700 text-center">
          productName
        </div>
        <div className="text-md font-semibold text-green-500 text-center">
          {USDollar.format(1000)}
        </div>
      </div>
      <div className="w-full flex justify-between gap-2">
        <button
          className="w-full h-10 bg-red-500 text-center text-white rounded-sm disabled:bg-slate-100 disabled:text-black"
          disabled={count == 0 ? true : false}
        >
          Sell
        </button>
        <input
          className="w-full h-10 text-center border border-gray-300 rounded-sm"
          type="number"
          min={0}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="w-full h-10 bg-green-400 text-white rounded-sm">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
