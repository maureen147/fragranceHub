import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import Footer from "../components/Footer";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";

const Blog = () => {
  return (
    <>
      <Menu />
      <SideNav />
      <Jumbotron title="COMING SOON..." subTitle="Blog Page" />
      <Footer />
    </>
  );
};

export default Blog;
