import type { Product } from "../data";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}
function ProductList({ products }: ProductListProps) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
