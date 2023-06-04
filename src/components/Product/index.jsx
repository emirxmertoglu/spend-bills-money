import { USDollar } from "@/utils/index";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct, sellProduct } from "@/reducers/billReducer";
import { updateMoney } from "@/reducers/moneyReducer";
import { updateQuantity } from "@/reducers/productReducer";

const Product = ({ product }) => {
  const { money } = useSelector((state) => state.money);
  const dispatch = useDispatch();

  const handleBuy = async () => {
    dispatch(updateQuantity({ id: product.id, type: "buy" }));

    dispatch(
      updateMoney({
        type: "buy",
        price: product.price,
      })
    );

    dispatch(
      buyProduct({
        ...product,
        price: product.price * (product.quantity + 1),
        quantity: product.quantity + 1,
      })
    );
  };

  const handleSell = () => {
    dispatch(updateQuantity({ id: product.id, type: "sell" }));

    dispatch(
      updateMoney({
        type: "sell",
        price: product.price,
      })
    );

    dispatch(
      sellProduct({
        ...product,
        price: product.price * (product.quantity - 1),
        quantity: product.quantity - 1,
      })
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
          className="w-full h-10 font-semibold text-center text-white bg-red-500  rounded-sm disabled:bg-slate-100 disabled:text-black disabled:cursor-not-allowed"
          disabled={product.quantity == 0 ? true : false}
          onClick={handleSell}
        >
          Sell
        </button>
        <input
          className="w-full h-10 font-semibold text-center border border-gray-300 rounded-sm"
          type="text"
          value={product.quantity}
          readOnly
        />
        <button
          className="w-full h-10 font-semibold bg-green-500 text-white rounded-sm disabled:bg-slate-100 disabled:text-black disabled:cursor-not-allowed"
          onClick={handleBuy}
          disabled={money < product.price ? true : false}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
