import React from "react";
import Shop from "../component/Shop";
import { Banner } from "../component/Banner";
import { Layout } from "../component/Layout";

export const Home = () => {
  return (
    <Layout>
      <Banner />
      <Shop />
    </Layout>
  );
};