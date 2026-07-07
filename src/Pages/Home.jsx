import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import FeaturesProduct from "../components/FeaturesProduct";
import Policy from "../components/Policy";
import HomeProducts from "../components/HomeProducts";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <MainContent>
        <Categories></Categories>
        <Policy></Policy>
        <FeaturesProduct></FeaturesProduct>
        <HomeProducts></HomeProducts>
      </MainContent>
      <Footer></Footer>
    </>
  );
};

export default Home;
