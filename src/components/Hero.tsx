import Button from "./Button";
import Background from "/src/images/background.png";
export default function Hero() {
  return (
    <section className="relative">
      <img src={Background} className="w-full" alt="Hero Image" />
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center
                  gap-1 rounded-lg bg-amber-50 px-4 py-5 text-center shadow-lg w-2/3 md:gap-2 md:px-12 md:py-16"
      >
        <h1 className="hidden md:block text-xl md:text-5xl font-bold text-red-800">
          Trung Thu
        </h1>
        <h1 className="hidden md:block text-xl md:text-5xl font-bold text-red-800">
          Về Rồi!
        </h1>
        <h1 className="text-lg md:text-5xl font-bold text-red-800 md:hidden">
          Trung Thu Về Rồi!
        </h1>
        <p className="text-sm w-4/5 md:text-2xl text-slate-700">
          Mang không khí trung thu đến với gia đình bạn!
        </p>
        <Button>Ghé tiệm</Button>
      </div>
    </section>
  );
}
