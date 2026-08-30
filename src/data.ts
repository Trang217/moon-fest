export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
export const products: Product[] = [
  {
    id: 1,
    name: "Đèn lồng ông sao size lớn",
    price: 5,
    description:
      "Đèn lồng ông sao size lớn, thích hợp trang trí trong dịp Tết Trung Thu.",
    imageUrl: "/src/images/den-long-ong-sao.png",
  },
];
