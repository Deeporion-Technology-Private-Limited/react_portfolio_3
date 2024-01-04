import React from "react";
import img1 from "../images/img25.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about_wrapper">
      <div className="about_container">
        <img src={img1} alt="" />
        <div className="about_details">
          <h4>{t("about")}</h4>
          <p>{t("about_content")}</p>
          <button>{t("read_more")}</button>
        </div>
      </div>
    </div>
  );
};

export default About;
