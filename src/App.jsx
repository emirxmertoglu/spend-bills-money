import Header from "@/components/Header";
import MoneyBar from "@/components/MoneyBar";
import Products from "@/components/Products";

const App = () => {
  return (
    <div className="p-4 lg:p-8">
      <div className="container max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-4">
          <Header />
          <MoneyBar />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default App;
