import Header from "@/components/Header";
import MoneyBar from "@/components/MoneyBar";

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col gap-4">
        <Header />
        <MoneyBar />
      </div>
    </div>
  );
};

export default App;
