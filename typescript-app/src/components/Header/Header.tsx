const Header = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Welcome to My Dashboard
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2">
            Your go-to place for managing your data and settings
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
