// import React from "react";
import { Card } from "./ProductCard";
// import image1 from "../../assets/image (1).png";
// import image2 from "../../assets/image (2).png";
// import image3 from "../../assets/image (3).png";
// import image4 from "../../assets/image (4).png";
// import image5 from "../../assets/image (5).png";
// import image6 from "../../assets/image (6).png";
// import image7 from "../../assets/image (7).png";
// import image8 from "../../assets/image (8).png";
// import image9 from "../../assets/image (9).png";
// import image10 from "../../assets/image (10).png";
// import image11 from "../../assets/image (11).png";
// import image12 from "../../assets/image (12).png";
// import image13 from "../../assets/image (13).png";
// import image14 from "../../assets/image (13).png";
// const products = [
//   {
//     id: "1",
//     title: "Raptor i7",
//     price: "₦560,000",
//     rating: 4,
//     imageUrl: image1,
//   },
//   {
//     id: "2",
//     title: "Phantom X Elite",
//     price: "₦600,000",
//     rating: 5,
//     imageUrl: image2,
//   },
//   {
//     id: "3",
//     title: "Ryzen 9 7900X",
//     price: "₦700,000",
//     rating: 5,
//     imageUrl: image3,
//   },
//   {
//     id: "4",
//     title: "Core i9 13900K",
//     price: "₦800,000",
//     rating: 5,
//     imageUrl: image4,
//   },
//   {
//     id: "5",
//     title: "RTX 4090",
//     price: "₦2,000,000",
//     rating: 5,
//     imageUrl: image5,
//   },
//   {
//     id: "6",
//     title: "RTX 4080",
//     price: "₦1,500,000",
//     rating: 4,
//     imageUrl: image6,
//   },
//   {
//     id: "7",
//     title: "RTX 4070",
//     price: "₦1,200,000",
//     rating: 4,
//     imageUrl: image7,
//   },
//   {
//     id: "8",
//     title: "RX 7900XT",
//     price: "₦1,100,000",
//     rating: 4,
//     imageUrl: image8,
//   },
//   {
//     id: "9",
//     title: "RX 7800XT",
//     price: "₦900,000",
//     rating: 4,
//     imageUrl: image9,
//   },
//   {
//     id: "10",
//     title: "RX 7700XT",
//     price: "₦750,000",
//     rating: 4,
//     imageUrl: image10,
//   },
//   {
//     id: "11",
//     title: "Samsung SSD 980 Pro",
//     price: "₦150,000",
//     rating: 5,
//     imageUrl: image11,
//   },
//   {
//     id: "12",
//     title: "WD Black SN850X",
//     price: "₦140,000",
//     rating: 5,
//     imageUrl: image12,
//   },
//   {
//     id: "13",
//     title: "Crucial P5 Plus",
//     price: "₦120,000",
//     rating: 4,
//     imageUrl: image13,
//   },
//   {
//     id: "14",
//     title: "Kingston KC3000",
//     price: "₦110,000",
//     rating: 4,
//     imageUrl: image14,
//   },
//   {
//     id: "15",
//     title: "Raptor i7",
//     price: "₦560,000",
//     rating: 4,
//     imageUrl: image13,
//   },
//   {
//     id: "16",
//     title: "Raptor i7",
//     price: "₦560,000",
//     rating: 4,
//     imageUrl: image14,
//   },
// ];

const Product = ({products}: {products: any}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((product: any ) => (
           <Card
           key={product.id} // ✅ product.id is a string now
           title={product.name}
           price={product.price}
           rating={product.rating}
           imageUrl={product.image}
           productId={product.id} // ✅ Fixed type issue (id is now a string)
         />
        ))}
      </div>
    </div>
  );
};

export default Product;
