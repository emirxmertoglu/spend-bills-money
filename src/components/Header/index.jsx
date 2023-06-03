const Header = () => {
  return (
    <div className="py-12 px-4 flex flex-col items-center justify-center gap-4 bg-white rounded-sm">
      <img
        className="w-32 h-32 rounded-full object-contain"
        src="https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds"
        alt="Bill Gates"
      />

      <div className="text-3xl font-bold text-center">
        Spend Bill Gates' Money
      </div>
    </div>
  );
};

export default Header;
