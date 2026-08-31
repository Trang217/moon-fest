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
    imageUrl: "/src/images/star-without-border.png",
  },
  {
    id: 2,
    name: "Đèn lồng ông sao size nhỏ",
    price: 3,
    description:
      "Đèn lồng ông sao size nhỏ, thích hợp trang trí trong dịp Tết Trung Thu.",
    imageUrl: "/src/images/two-stars.png",
  },
  {
    id: 3,
    name: "Dây treo trang trí",
    price: 5,
    description:
      "Dây treo trang trí, thích hợp trang trí trong dịp Tết Trung Thu.",
    imageUrl: "/src/images/set-three-lines.png",
  },
  {
    id: 4,
    name: "Khăn trải bàn hoạ tiết Công Phượng",
    price: 5,
    description:
      "Khăn trải bàn hoạ tiết Công Phượng, thích hợp trang trí trong dịp Tết Trung Thu.",
    imageUrl: "/src/images/desk-cover.png",
  },
  {
    id: 5,
    name: "Set trang trí Trung Thu",
    price: 15,
    description:
      "Set trang trí Trung Thu, thích hợp trang trí trong dịp Tết Trung Thu.",
    imageUrl: "/src/images/set-decor.png",
  },
];
