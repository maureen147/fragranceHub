import Hero from "../components/Hero";
import Brands from "../components/Brand";
import Testimonies from "../components/Testimonies";
import BlogCard from "../components/Blog";
import Footer from "../components/Footer";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";
import CountDownTimer from "../components/CountDownTimer";
import AllfragranceComponent from "../components/AllfragranceComponent";
import NewArrivalComponent from "../components/NewArrivalComponent";

const Home = () => {
  return (
    <>
      <Menu />
      <SideNav />
      <Hero />
      <Brands />
      <Testimonies />
      <CountDownTimer/>
      <AllfragranceComponent/>
      <NewArrivalComponent title="New Arrivals" link = "/new-arrivals"/>
      <BlogCard />
      <Footer />
    </>
  );
};

export default Home;
