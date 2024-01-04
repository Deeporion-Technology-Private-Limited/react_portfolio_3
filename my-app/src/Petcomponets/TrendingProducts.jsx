import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../images/img7.png";
import img2 from "../images/img8.png";
import img3 from "../images/img9.png";
import img4 from "../images/img10.png";
import img5 from "../images/img11.png";
import img6 from "../images/img12.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const TrendingProducts = () => {
  const { t } = useTranslation();

  const trendingProductData = [
    {
      id: 1,
      img1: img1,
      img2: img2,
      title: t("dining_pets"),
      content: t("readable_content"),
      price: t("price"),
      icon1: <IoEyeOutline />,
      icon2: <IoIosHeartEmpty />,
      icon3: <IoCartOutline />,
    },

    {
      id: 2,
      img1: img3,
      img2: img4,
      title: t("dining_pets"),
      content: t("readable_content"),
      price: t("price"),
      icon1: <IoEyeOutline />,
      icon2: <IoIosHeartEmpty />,
      icon3: <IoCartOutline />,
    },
    {
      id: 3,
      img1: img5,
      img2: img6,
      title: t("dining_pets"),
      content: t("readable_content"),
      price: t("price"),
      icon1: <IoEyeOutline />,
      icon2: <IoIosHeartEmpty />,
      icon3: <IoCartOutline />,
    },
    {
      id: 4,
      img1: img1,
      img2: img2,
      title: t("dining_pets"),
      content: t("readable_content"),
      price: t("price"),
      icon1: <IoEyeOutline />,
      icon2: <IoIosHeartEmpty />,
      icon3: <IoCartOutline />,
    },
    {
      id: 5,
      img1: img3,
      img2: img4,
      title: t("dining_pets"),
      content: t("readable_content"),
      price: t("price"),
      icon1: <IoEyeOutline />,
      icon2: <IoIosHeartEmpty />,
      icon3: <IoCartOutline />,
    },
    {
      id: 6,
      img1: img5,
      img2: img6,
      title: t("dining_pets"),
      content: t("readable_content"),
      price: t("price"),
      icon1: <IoEyeOutline />,
      icon2: <IoIosHeartEmpty />,
      icon3: <IoCartOutline />,
    },
  ];

  const filter = [
    { id: 1, title: t("filter") },
    { id: 2, title: t(" pets") },
    { id: 3, title: t("accessories") },
    { id: 4, title: t("cat") },
    { id: 5, title: t("brands") },
    { id: 6, title: t(" fish") },
    { id: 7, title: t("surmai") },
    { id: 8, title: t("bangda") },
  ];

  return (
    <div>
      <div>
        <h1 className="heading">{t("trending_product")}</h1>
        <div className="trending_filters">
          {filter.map((item) => (
            <div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>

        <div className="trending_container">
          <div className="trending_box">
            {trendingProductData.map((item) => (
              <div className="trending_products" key={item.id}>
                <div className="image-container">
                  <img src={item.img1} alt="" className="img1" />
                  <img src={item.img2} alt="" className="img2" />
                </div>
                <div className="product_info">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <h5>{item.price}</h5>

                  <div className="trending_icons">
                    <span>{item.icon1}</span>
                    <span>{item.icon2}</span>
                    <span>{item.icon3}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
