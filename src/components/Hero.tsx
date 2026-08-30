export default function Hero() {
  return (
    <section className="relative">
      <img
        src="/src/images/background.png"
        className="w-full"
        alt="Hero Image"
      />
      <div className="absolute flex flex-col justify-center items-center gap-8 bg-amber-50 w-2/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-12 py-16 rounded-lg shadow-lg">
        <h1 className="text-7xl font-bold text-red-800">Trung Thu </h1>
        <h1 className="text-7xl font-bold text-red-800">Về Rồi!</h1>
        <p className="text-2xl text-gray-600">
          Mang không khí trung thu đến với gia đình bạn!
        </p>
        <button className="bg-red-800 text-white text-2xl px-6 py-3 rounded-lg hover:bg-red-900 transition-colors">
          Ghé tiệm
        </button>
      </div>
    </section>
  );
}
