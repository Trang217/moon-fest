import type { Product } from "../data";

interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      key={product.id}
      className="border-2 border-slate-700 p-4 rounded-sm shadow-md"
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-md text-left font-semibold mb-2">{product.name}</h3>
      <p className="text-slate-900 mb-2">{product.description}</p>
      <p className="text-md font-bold">€{product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
