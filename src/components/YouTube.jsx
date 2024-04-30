import React from "react";
import "../css/YouTube.css";
import { Container } from "react-bootstrap";


const YouTube = () => {
  return (
    <div className="youtubeG pt-4">
      <Container className="">
        <h3>Watch Our Reviews</h3>
        <div className="gvideo ratio ratio-16x9">
          <iframe
            width="100%"
            height="100%"
            style={{ borderRadius: "0.5rem" }}
            src="https://www.youtube.com/embed/Le5hGH5DjYM?si=hHnHHAQVyBQLEOB2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
};
export default YouTube;
