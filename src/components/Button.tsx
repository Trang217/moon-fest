interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-red-800 text-amber-50 text-sm mt-1 px-4 py-1.5 md:text-2xl md:px-8 md:py-4 rounded hover:scale-105 duration-75 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
