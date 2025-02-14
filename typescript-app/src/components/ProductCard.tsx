const ProductCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-red-300 p-4">Item 1</div>
        <div className="bg-blue-300 p-4">Item 2</div>
        <div className="bg-green-300 p-4">Item 3</div>
        <div className="bg-yellow-300 p-4">Item 4</div>
        <div className="text-blue-400">My Typescript Page</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
