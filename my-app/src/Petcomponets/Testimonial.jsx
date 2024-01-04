import React, { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import img27 from "../images/img27.png";
import img26 from "../images/img26.png";
import img28 from "../images/img28.png";
import img29 from "../images/img29.png";

import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(1);

  const scrollToNextItem = () => {
    const nextIndex = (currentIndex % carouselItems.length) + 1;
    setCurrentIndex(nextIndex);
  };

  // Automatically scroll every 5 seconds
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      scrollToNextItem();
    }, 5000);

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [currentIndex]);

  const handlePrevClick = (num) => {
    setCurrentIndex(num);
  };

  const carouselItems = [
    // Add your carousel items here
    {
      title: "Item 1",
      description: t("dummy_ess"),
    },
    {
      title: "Item 2",
      description: t("dummy_ess"),
    },

    {
      title: "Item 2",
      description: t("dummy_ess"),
    },

    {
      title: "Item 1",
      description: t("dummy_ess"),
    },
    {
      title: "Item 1",
      description: t("dummy_ess"),
    },

    // Add more items as needed
  ];

  const handleScroll = (event) => {
    const scrollDelta =
      event.nativeEvent.wheelDelta || -event.nativeEvent.deltaY;
    const scrollDirection = scrollDelta > 0 ? "up" : "down";

    if (scrollDirection === "up") {
      scroller.scrollTo("prevItem", {
        smooth: true,
      });
    } else {
      scroller.scrollTo("nextItem", {
        smooth: true,
      });
    }
  };

  return (
    <div>
      <h1 className="heading">{t("testimonials")}</h1>
      <div className="testimonial_wrapper">
        <div>
          <img src={img29} alt="" />
        </div>

        <div
          className="carousel_container
            "
        >
          <div>
            <div
              className=" "
              style={{ boxShadow: "10px 10px 30px 0px rgba(0, 0, 0, 0.10)" }}
              onWheel={handleScroll}
            >
              {carouselItems.map((item, index) => (
                <Element
                  key={index}
                  className={`carousel-item ${
                    index + 1 === currentIndex ? "block" : "hidden"
                  }`}
                  name={
                    index === 0
                      ? "prevItem"
                      : index === carouselItems.length - 1
                      ? "nextItem"
                      : null
                  }
                >
                  <div className="carousel_content">
                    <div className="">
                      <img src={img27} alt="" className="my-3" />
                    </div>
                    <div>
                      <h4>{item.description}</h4>
                    </div>
                    <div className=""></div>
                    <div className="client_detail">
                      <div>
                        <img src={img26} alt="" />
                      </div>
                      <div>
                        <h1 className="">Mahindra jhon</h1>
                        <p className="">Ceo & Sustainable designer</p>
                      </div>
                      <div>
                        <img src={img28} alt="" />
                      </div>
                    </div>
                  </div>
                </Element>
              ))}
            </div>
          </div>
          <div className="relative right-[10%] carousel-bullets ">
            {Array.from(Array(5 + 1).keys())
              .slice(1)
              .map((num) => (
                <div key={num}>
                  <button
                    onClick={() => handlePrevClick(num)}
                    className={`carousel-bullet ${
                      currentIndex === num ? "active" : ""
                    } carousel-bullet-${num}`}
                    style={{ transitionDelay: `${num * 0.1}s` }}
                  >
                    <li className="relative left-[15px]"></li>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
