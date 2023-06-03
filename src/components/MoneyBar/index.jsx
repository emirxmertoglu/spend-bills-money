import { useSelector } from "react-redux";

const MoneyBar = () => {
  const { money } = useSelector((state) => state.money);

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="h-16 flex items-center justify-center bg-green-500 text-white text-3xl font-bold">
      {USDollar.format(money)}
    </div>
  );
};

export default MoneyBar;
