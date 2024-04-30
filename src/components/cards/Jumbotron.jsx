import "../../css/Jumbotron.css"

const Jumbotron = ({ title, subTitle = "Welcome to Fragrance Hub" }) => {
  return (
    <div
      className="container jumbotron"
      style={{ marginTop: ".4rem", height: "200px" }}
    >
      <div className="row">
        <div className="col text-center p-5">
          <h1 className="fw-bold">{title}</h1>
          <p className="lead">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
