import { useSelector } from "react-redux";
import { USDollar } from "@/utils/index";

const Bill = () => {
  const { bill, totalPrice } = useSelector((state) => state.bill);

  if (bill.length > 0) {
    return (
      <div className="py-5 px-4 flex flex-col items-center bg-white rounded-sm shadow-sm">
        <h3 className="text-3xl font-semibold">Your Receipt</h3>

        <table className="table-auto lg:w-1/2 mt-8">
          <tbody>
            {bill.map((item) => (
              <tr key={item.id} className="border-b py-2">
                <td className="py-2">{item.title}</td>
                <td className="py-2 px-4">x{item.quantity}</td>
                <td className="py-2 font-semibold text-green-500">
                  {USDollar.format(item.price)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="pt-2 font-semibold">
                Total
              </td>
              <td className="pt-2 font-semibold text-green-500">
                {USDollar.format(totalPrice)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default Bill;
