import Header from "@/components/Header";
import MoneyBar from "@/components/MoneyBar";

const App = () => {
  return (
    <div className="p-4 lg:p-8 h-full bg-gray-100">
      <div className="container max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-4">
          <Header />
          <MoneyBar />
        </div>
      </div>
    </div>
  );
};

export default App;
