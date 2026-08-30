import HeaderAction from "./HeaderAction";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="px-8 py-6 bg-amber-200">
      <nav className=" flex flex-row items-center justify-between ">
        <Logo />
        <Navigation />
        <HeaderAction />
      </nav>
    </header>
  );
}
