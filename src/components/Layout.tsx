import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 bg-amber-50">{children}</main>
      <Footer />
    </div>
  );
}
