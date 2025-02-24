import ProductList from "@/components/Products/ProductList";

const Services = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Our Services</h1>
      <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductList key={index} index={index} />
        ))}
      </section>
    </div>
  );
};

export default Services;
