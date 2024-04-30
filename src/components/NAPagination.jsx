import ForwardArrowImg from "../assets/images/NA Vector Forward.png";


export const RenderPaginationButtons = ({numbers, currentPage,changeCurrentPage, nPage, nextPage}) => {
    return (
      <div className="d-flex justify-content-between flex-wrap gap-3">
        <nav className="">
          <ul className="pagination justify-content-center">
            {numbers.map((number, index) => (
              <li
                className={`page-item ${currentPage === number ? "active" : ""
                  }`}
                key={index}
              >
                <button
                  className="page-link mx-2"
                  onClick={() => changeCurrentPage(number)}
                >
                  {number}
                </button>
              </li>
            ))}

            <li className="page-item">
              <button
                className="page-link"
                onClick={nextPage}
                disabled={currentPage === nPage}
              >
                <a href="#">
                  <img src={ForwardArrowImg} alt="" />
                </a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

