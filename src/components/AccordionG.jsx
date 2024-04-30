import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionStyles from '../css/AccordionG.module.css'
function Accordions({product}) {
  return (
    <div className="accordionG ">
        <div className='accG'>
        <h3>Product Details</h3>
        <Accordion defaultActiveKey="0" alwaysOpen className='accG border border-0'>
      <Accordion.Item eventKey="0" >
        <div className="border-top border-2">
        <Accordion.Header className={AccordionStyles['accord-header-g']} ><span style={{fontSize:'24px', fontWeight:'500',}}>About The Product</span></Accordion.Header>
        <Accordion.Body>
        <p className='detailG'>{product?.about}</p>
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="1" >
        <div className="border-top border-2">
        <Accordion.Header className={AccordionStyles['accord-header-g']}><span style={{fontSize:'24px', fontWeight:'500'}}>Scent Profile</span></Accordion.Header>
        <Accordion.Body>
        <p className='detailG'>{product?.scentProfile}</p>
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="2" >
       <div className="border-top border-2">
       <Accordion.Header className={AccordionStyles['accord-header-g']}><span style={{fontSize:'24px', fontWeight:'500'}}>Scent Type</span></Accordion.Header>
        <Accordion.Body>
          <p className='detailG'>{product?.scentType}</p>
        </Accordion.Body>
       </div>
      </Accordion.Item>
      <Accordion.Item eventKey="3" >
        <div className="border-top border-2">
        <Accordion.Header className={AccordionStyles['accord-header-g']}><span style={{fontSize:'24px', fontWeight:'500'}}>Suggested For Use</span></Accordion.Header>
        <Accordion.Body>
       <p className='detailG'> {product?.usage}</p>
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="4" >
        <div className="border-top border-2 border-bottom">
        <Accordion.Header className={AccordionStyles['accord-header-g']}><span style={{fontSize:'24px', fontWeight:'500'}}>Refund Policy</span></Accordion.Header>
        <Accordion.Body>
          <p className='detailG'>{product?.returnPolicy}</p>
        </Accordion.Body>
        </div>
      </Accordion.Item>
    </Accordion>
        </div>
    </div>
  );
}
export default Accordions;
