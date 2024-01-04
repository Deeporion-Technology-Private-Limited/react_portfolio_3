import React from "react";
import PetCare from "./PetCare";
import ShopCategory from "./Shopcategory";
import TrendingProducts from "./TrendingProducts";
import ProductGallery from "./ProductGallery";
import SpecialProducts from "./SpecialProducts";
import Services from "./Services";
import About from "./About";
import Testimonial from "./Testimonial";

const Pet = () => {
  return (
    <div>
      <PetCare />
      <ShopCategory />
      <TrendingProducts />
      <ProductGallery />
      <SpecialProducts />
      <Services />
      <About />
      <Testimonial />
    </div>
  );
};

export default Pet;
