import React, { useEffect, useState } from "react";
import DetailCard from "../components/DetailCard";
import Accordions from "../components/AccordionG";
import RelatedProd from "../components/RelatedProd";
import YouTube from "../components/YouTube";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/DetailPage.css";
import Footer from "../components/Footer";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";
import DetailCardLoading from "../components/DetailLoading";

const DetailPage = () => {
  const { productId } = useParams();
  const [productG, setProductG] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`/product/${productId}`);
        // console.log("Fetched data:", response.data);
        setProductG(response.data.product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      finally{
        setLoading(false)
      }
    };
    fetchData();
  }, [productId]);

  return (
    <>
      <Menu />
      <SideNav />
      <div className="all-details d-flex flex-column justify-content-center ">
        <>
          <div className="mb-4 detail-card ">
            {loading ? (
              <DetailCardLoading />
            ) : productG && (

              <DetailCard product={productG} />
            )}
          </div>

          <div className="gaccrel d-flex  justify-content-between flex-column flex-lg-row ">
            <div className="row d-flex  justify-content-between accordion-detailG ">
              <Accordions className="" product={productG} />

              <div className="d-lg-block d-none youtube-g ">
                <YouTube />
              </div>
            </div>

            <div className="d-flex justify-content-center relate-p">
              <RelatedProd />
            </div>

            <div className="d-lg-none youtube-g">
              <YouTube />
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};
export default DetailPage;