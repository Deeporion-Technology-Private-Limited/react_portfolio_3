import React from "react";
import { useTranslation } from "react-i18next";
import Svg1 from "../Svg/Svg1";
import Svg2 from "../Svg/Svg2";
import Svg3 from "../Svg/Svg3";
import Svg4 from "../Svg/Svg4";
const Services = () => {
  const { t } = useTranslation();

  const service = [
    {
      id: 1,
      icon: <Svg1 />,
      title: t("free_support"),
      content: t("dummy"),
    },
    {
      id: 2,
      icon: <Svg2 />,
      title: t("gift_voucher"),
      content: t("dummy"),
    },
    {
      id: 3,
      icon: <Svg3 />,
      title: t("online_shopping"),
      content: t("dummy"),
    },
    {
      id: 4,
      icon: <Svg4 />,
      title: t("exchange_policy"),
      content: t("dummy"),
    },
  ];

  return (
    <div>
      <h1 className="heading">{t("our_services")}</h1>
      <div className="service_container">
        {service.map((item) => (
          <div>
            <div className="service_details">
              <span className="svg-container">{item.icon}</span>
              <h4>{item.title}</h4>
              <h5>{item.content}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
