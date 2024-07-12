import React from "react";
import Shop from "../component/Shop";
import { Footer } from "../component/Footer";
import { Banner } from "../component/Banner";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Shop />
      <Footer />
    </div>
  );
};
