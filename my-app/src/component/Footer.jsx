import React from "react";
import "./style.css";
import logo from "../images/logo.png";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div>
          <img src={logo} alt="" />
          <div>
            <p className="footer_text">{t("commited")}</p>
          </div>
          <div>
            <FaFacebook className="footer_tags" />
            <FaLinkedinIn className="footer_tags" />
            <FaInstagram className="footer_tags" />
          </div>
        </div>
        <div>
          <ul>
            <li className="footer_heading">{t("info")}</li>
            <li className="footer_links">{t("faqs")}</li>
            <li className="footer_links">{t("terms")}</li>
            <li className="footer_links">{t("dilevery")}</li>
            <li className="footer_links">{t("aboutUs")}</li>
            <li className="footer_links">{t("privacy")}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer_heading">{t("quick_links")}</li>
            <li className="footer_links">{t("my_account")}</li>
            <li className="footer_links">{t("special")}</li>
            <li className="footer_links">{t("order_history")}</li>
            <li className="footer_links"> {t("newsletter")}</li>
            <li className="footer_links"> {t("contact")}</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="footer_heading">{t("contact")}</li>
            <li className="footer_links">+91 96800 29092</li>
            <li className="footer_links">{t("mail")}</li>
            <li className="footer_links">{t("address")}</li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <p>{t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
