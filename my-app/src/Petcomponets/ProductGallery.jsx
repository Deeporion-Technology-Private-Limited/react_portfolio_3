import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../images/img13.png";
import img2 from "../images/img14.png";
import img3 from "../images/img15.png";
import img4 from "../images/img16.png";

const ProductGallery = () => {
  const { t } = useTranslation();

  const img = [
    {
      id: 1,
      image: img1,
      content: t("dog_bone"),
    },
    {
      id: 2,
      image: img2,
      content: t("dog_bone"),
    },
    {
      id: 3,
      image: img3,
      content: t("dog_bone"),
    },
    {
      id: 4,
      image: img4,
      content: t("dog_bone"),
    },
  ];

  return (
    <div>
      <h1 className="heading">{t("product_gallery")}</h1>
      <div className="product_gallery">
        <div className="gallery_wrapper">
          {img.map((item) => (
            <div key={item.id} className={item.id % 2 === 0 ? "even" : "odd"}>
              <img src={item.image} alt="" />
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
