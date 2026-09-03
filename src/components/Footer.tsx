import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-amber-200 text-slate-700 py-12 flex flex-col md:flex-row justify-center items-center">
      <div className="px-4 flex flex-col items-center justify-center gap-4 md:gap-8 md:flex-row">
        <Logo />

        <p className="text-center mt-4 text-lg font-semibold">
          Giữ gìn nét xưa trong hơi thở mới!
        </p>
      </div>

      <div className="flex-1">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Moon Fest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
