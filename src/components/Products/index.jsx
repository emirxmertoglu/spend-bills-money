import Product from "@/components/Product";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {Array.from({ length: 10 }).map((_, index) => (
        <Product key={index} />
      ))}
    </div>
  );
};

export default Products;
