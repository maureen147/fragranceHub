import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import Menu from "../components/NavBar";

const Contact = () => {
  return (
    <>
      <Menu />
      <SideNav />
      <Jumbotron title="COMING SOON..." subTitle="Contact Page" />
      <Footer />
    </>
  );
};

export default Contact;
