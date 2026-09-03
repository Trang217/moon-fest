import setDecor from "../images/set-decor.png";
import Button from "./Button";
function ProductIntro() {
  return (
    <section className="px-6 py-8 md:px-8 md:py-16">
      <div className=" mx-auto gap-8 md:grid md:grid-cols-2 md:gap-16">
        <div className="text-center py-4 md:py-8 flex flex-col gap-4 justify-center items-start md:text-left">
          <h2 className="text-xl md:text-3xl font-bold text-slate-700">
            Ban đang tìm gì cho không gian Trung Thu của mình?
          </h2>
          <p className="text-slate-700 text-xl md:text-2xl">
            Không biết bắt đầu trang trí từ đâu?
          </p>
          <p className="text-slate-700 text-lg md:text-2xl">
            Moon Fest đã gom những món đồ Trung Thu thật xinh, để bạn dễ dàng
            chọn cho mình một góc trăng rằm thật riêng.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-slate-700">
            Trong set decor này có gì?
          </h3>

          <ul className=" list-inside mt-2 md:mt-4 bg-slate-100 px-5 py-4 md:px-10 md:py-8 text-slate-700 text-xl md:text-2xl border-2 border-slate-400 rounded-sm p-2 md:p-4 ">
            <li className="text-lg md:text-2xl">Đèn lồng Ông Sao lớn</li>
            <li className="text-lg md:text-2xl">Đèn lồng Ông Sao nhỏ</li>
            <li className="text-lg md:text-2xl">Dây treo trang trí</li>
            <li className="text-lg md:text-2xl">
              Khăn trải bàn hoạ tiết Công Phượng
            </li>
          </ul>

          <Button className="mx-auto">Mua ngay Set trang trí</Button>
        </div>
        <div className="">
          <img src={setDecor} alt="Set Decor" />
        </div>
      </div>
    </section>
  );
}

export default ProductIntro;
