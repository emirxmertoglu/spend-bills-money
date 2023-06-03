import { useSelector } from "react-redux";
import { USDollar } from "@/utils";

const MoneyBar = () => {
  const { money } = useSelector((state) => state.money);

  return (
    <div className="sticky top-0 h-16 flex items-center justify-center bg-gradient-to-b from-lime-500 to-green-500 text-white text-3xl font-bold shadow">
      {USDollar.format(money)}
    </div>
  );
};

export default MoneyBar;
