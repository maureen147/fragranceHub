import React from 'react'
import fragrance1 from '../assets/images/fragrance 1.png'
import fragrance2 from '../assets/images/fragrance 2.png'
import fragrance3 from '../assets/images/fragrance 3.png'
import fragrance4 from '../assets/images/fragrance 4.png'
// import { HiOutlineArrowRight } from "react-icons/hi2";
import '../css/Brand.css'

const BrandComponent = () => {
  return (
    <div className='frr-brand'>
      <div className='frr-head mx-lg-3'>
         <h3>
        All Fragrance Brands 
        </h3>
         <button className='view'>
          view all  
           {/* <HiOutlineArrowRight className='icon ms-2'/> */}
          </button>
  
  
      </div>
      <div className='frag'>
        <div className='fragrance'>
          <img src ={fragrance1}/>
      </div>
          <div className='fragrance'>
             <img src ={fragrance2}/>
          </div>
         <div className='fragrance'>
            <img src ={fragrance3}/>
         </div>
         <div className='fragrance'>
      <img src ={fragrance4}/>
        </div>
      </div>
      
      
    </div>
  )
}

export default BrandComponent