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
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>x{item.quantity}</td>
                <td>{USDollar.format(item.price)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t border-black">
            <tr>
              <td colSpan="2" className="font-semibold">
                Total
              </td>
              <td>{USDollar.format(totalPrice)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default Bill;
