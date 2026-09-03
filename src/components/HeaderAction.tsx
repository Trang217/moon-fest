import { Search, ShoppingCart } from "lucide-react";

export default function HeaderAction() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <Search className="w-8 h-8 text-gray-500 hover:scale-105 duration-75" />
      <ShoppingCart className="w-8 h-8 text-gray-500 hover:scale-105 duration-75  " />
    </div>
  );
}
