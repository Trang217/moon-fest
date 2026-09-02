import type { Product } from "../data";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}
function ProductList({ products }: ProductListProps) {
  return (
    <section className="px-8 py-16 bg-amber-600">
      <h2 className="text-2xl font-bold mb-14 text-center">
        Nhà ai cũng có một mùa trăng
      </h2>
      <div className="flex gap-4 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
