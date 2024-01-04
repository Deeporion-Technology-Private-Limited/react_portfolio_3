import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../images/img17.png";
import img2 from "../images/img18.png";
import img3 from "../images/img19.png";
import img4 from "../images/img20.png";
import img5 from "../images/img21.png";
import img6 from "../images/img22.png";
import img7 from "../images/img23.png";
import img8 from "../images/img24.png";

const SpecialProducts = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      img1: img1,
      img2: img2,
      title: t("dog_bone"),
      price: t("price"),
    },
    {
      id: 2,
      img1: img3,
      img2: img4,
      title: t("dog_bone"),
      price: t("price"),
    },
    {
      id: 3,
      img1: img5,
      img2: img6,
      title: t("dog_bone"),
      price: t("price"),
    },
    {
      id: 4,
      img1: img7,
      img2: img8,
      title: t("dog_bone"),
      price: t("price"),
    },
  ];

  return (
    <div>
      <h1 className="heading">{t("special_products")}</h1>
      <div className="special_product">
        {products.map((item) => (
          <div className="product_container">
            <div className="product_img">
              <img src={item.img1} alt="" className="img1" />
              <img src={item.img2} alt="" className="img2" />
            </div>
            <div className="product_detail">
              <h4>{item.title}</h4>
              <h5>{item.price}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;
