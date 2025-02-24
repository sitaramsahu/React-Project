import { Button } from "@/components/ui/button";
import ProductList from "@/components/Products/ProductList";
import ProductCard from "@/components/Products/ProductCard";
import { products } from "@/components/AllProductsList/CardProduct";

const Dashboard: React.FC = () => {
  return (
    <div>
      <header className="flex flex-col items-center justify-center text-center  min-h-[60vh]">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
        <p className="text-lg max-w-xl">
          Building responsive and fast web applications using Vite and React.
        </p>
        <Button className="mt-6 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200">
          Get Started
        </Button>
      </header>
      <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductList key={index} index={index} />
        ))}
      </section>
      <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
