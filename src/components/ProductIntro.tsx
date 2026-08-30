function ProductIntro() {
  return (
    <section className="px-8 py-16">
      <div className="grid mx-auto max-w-6xl grid-cols-2">
        <div className="py-8 flex flex-col gap-4 justify-center items-start">
          <h2 className="text-3xl font-bold text-slate-700">
            Ban đang tìm gì cho không gian Trung Thu của mình?
          </h2>
          <p className="text-slate-700 text-2xl">
            Không biết bắt đầu trang trí từ đâu?
          </p>
          <p className="text-slate-700 text-2xl">
            Moon Fest đã gom những món đồ Trung Thu thật xinh, để bạn dễ dàng
            chọn cho mình một góc trăng rằm thật riêng.
          </p>
          <h3 className="text-2xl font-bold text-slate-700">
            Trong set decor này có gì?
          </h3>

          <ul className=" list-inside mt-4 bg-slate-100 px-10 py-8 text-slate-700 text-2xl border-2 border-slate-400 rounded-sm p-4 ">
            <li>Đèn lồng Ông Sao lớn</li>
            <li>Đèn lồng Ông Sao nhỏ</li>
            <li>Dây treo trang trí</li>
            <li>Khăn trải bàn hoạ tiết Công Phượng</li>
          </ul>

          <button className="bg-red-800 mt-4 text-white text-2xl px-8 py-3 rounded-lg transition-colors cursor-pointer hover:scale-105 hover:text-amber-50 duration-75">
            Mua ngay Set trang trí
          </button>
        </div>
        <div className="">
          <img src="/src/images/set-decor.png" alt="Set Decor" />
        </div>
      </div>
    </section>
  );
}

export default ProductIntro;
