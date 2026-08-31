import type { Product } from "../data";

interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  return (
    <div key={product.id} className="border p-4 rounded-lg shadow-md">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
