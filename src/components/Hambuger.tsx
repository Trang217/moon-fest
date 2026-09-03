import Hamburger from "../images/transparent-menu-logo.png";
export default function Hambuger() {
  return (
    <img
      src={Hamburger}
      alt="Menu"
      className="md:hidden h-12 w-14 cursor-pointer hover:scale-105 transition-transform duration-300"
    />
  );
}
