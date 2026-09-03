import HeaderAction from "./HeaderAction";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Hambuger from "./Hambuger";

export default function Header() {
  return (
    <header className="px-8 bg-amber-200 w-full">
      <nav className=" flex flex-row items-center justify-between ">
        <Logo />
        <Navigation />
        <HeaderAction />
        <Hambuger />
      </nav>
    </header>
  );
}
