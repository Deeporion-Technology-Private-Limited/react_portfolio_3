import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../images/img2.png";
import img2 from "../images/img3.png";
import img3 from "../images/img4.png";
import img4 from "../images/img5.png";
import img5 from "../images/img6.png";

const ShopCategory = () => {
  const { t } = useTranslation();

  const shopByData = [
    {
      id: 1,
      img: img1,
      categort: t("cat_food"),
    },
    {
      id: 2,
      img: img2,
      categort: t("cat_toys"),
    },
    {
      id: 3,
      img: img3,
      categort: t("supplement"),
    },
    {
      id: 4,
      img: img4,
      categort: t("cat_shop"),
    },
    {
      id: 5,
      img: img5,
      categort: t("pet_shop"),
    },
  ];

  return (
    <div>
      <div className="heading">
        <h1>{t("shop_by")}</h1>
        <div className="category">
          {shopByData.map((item) => (
            <div className="category_container">
              <img src={item.img} alt="" />
              <div>
                <h4>{item.categort}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShopCategory;
