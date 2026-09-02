import setDecor from "./images/set-decor.png";
import starWithoutBorder from "./images/star-without-border.png";
import starBorderLarge from "./images/star-border-large.png";
import starBorderSmall from "./images/star-border-small.png";
import starNoBorderLarge from "./images/star-no-border-large.png";
import starNoBorderSmall from "./images/star-no-border-small.png";
import congPhuongDeskCover from "./images/cong-phuong-desk-cover.png";
import twoStars from "./images/two-stars.png";
import setThreeLines from "./images/set-three-lines.png";
import deskCover from "./images/desk-cover.png";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
}
export const products: Product[] = [
  {
    id: 1,
    name: "Đèn lồng ông sao size lớn",
    price: 5,
    description:
      "Đèn lồng ông sao size lớn, thích hợp trang trí trong dịp Tết Trung Thu.",
    imageUrls: [
    starWithoutBorder,
    starBorderLarge,
    starNoBorderLarge
  ],
},

{
    id: 2,
    name: "Đèn lồng ông sao size nhỏ",
    price: 3,
    description:
      "Đèn lồng ông sao size nhỏ, thích hợp trang trí trong dịp Tết Trung Thu.",
    imageUrls:  [ twoStars, starBorderSmall, starNoBorderSmall],

},

{
    id: 3,
    name: "Dây treo trang trí",
    price: 5,
    description:
      "Dây treo trang trí, thích hợp trang trí trong dịp Tết Trung Thu.",
    imageUrls: [setThreeLines]
  },
  {
    id: 4,
    name: "Khăn trải bàn hoạ tiết Công Phượng",
    price: 5,
    description:
      "Khăn trải bàn hoạ tiết Công Phượng, thích hợp trang trí trong dịp Tết Trung Thu.",
    imageUrls: [deskCover, congPhuongDeskCover] 
  },
  {
    id: 5,
    name: "Set trang trí Trung Thu",
    price: 15,
    description:
      "Set trang trí Trung Thu, thích hợp trang trí trong dịp Tết Trung Thu.",
    imageUrls: [setDecor]
  },
];
