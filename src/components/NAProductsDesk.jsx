import  { useState } from 'react'
import { data } from "../Db/Perfumedb"
import ProductCard from "./NAProductCard";
import ForwardArrowImg from "../assets/images/Vector.png"
import BackwardArrowImg from "../assets/images/Vector back.png"
import "../css/NAProductcard.css"
// import "../css/Newarrival.css"

// import { NavLink } from 'react-router-dom';

const Products = () => {
  const itemsPerPage = 15;

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const products = data.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(data.length / itemsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  // Function to handle page navigation
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  function changeCurrentPage(index) {
    setCurrentPage(index)
  }


  return (

    <div className="d-flex justify-content-between flex-wrap gap-3">
      {products.map((product, id) => {
        return (
          <div className="" key={id}>
            <ProductCard products={product} />
          </div>
        );
      })}

      <nav className="">
        <ul className="pagination justify-content-center">
          {/* <li className="page-item">
      <button className = "page-link" onClick= {prePage} disabled={currentPage === 1} >
      <img src={BackwardArrowImg} alt="" />
      </button>
  </li> */}
          {
            numbers.map((number, index) => (
              <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={index}>
                <a href="#" className="page-link mx-2" onClick={() => changeCurrentPage(number)} >
                  {number}
                </a>
              </li>
            ))

          }

          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage} disabled={currentPage === nPage}>
              <img src={ForwardArrowImg} alt="" />
            </a>
          </li>
        </ul>
      </nav>



    </div>
  )
}

export default Products