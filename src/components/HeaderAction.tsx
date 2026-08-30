import { Search, ShoppingCart } from "lucide-react";

export default function HeaderAction() {
  return (
    <div className="flex items-center gap-4">
      <Search className="w-6 h-6 text-gray-500" />
      <ShoppingCart className="w-6 h-6 text-gray-500" />
    </div>
  );
}
