import { useSelector } from "react-redux";
import { USDollar } from "@/utils";

const MoneyBar = () => {
  const { money } = useSelector((state) => state.money);

  return (
    <div className="h-16 flex items-center justify-center bg-green-500 text-white text-3xl font-bold">
      {USDollar.format(money)}
    </div>
  );
};

export default MoneyBar;
