import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/NAProductcard.css"
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
    // margin: top left bottom right
    const { name, price, image, isavailability, weight, fragrance_type, _id} = products
    // let priceNaira = (price/100).toLocaleString(undefined, {minimumFractionDigits: 2})
    return (
        <div >
            <div className='d-flex justify-content-between flex-wrap gap-3'>
                <Card className="card h-75" >
                    <Link to = {`/detail/${products._id}`} className='text-decoration-none text-dark'><Card.Img variant="top" src={image} className='NA-card-image' /></Link>
                    <Card.Body className='NA-card-body'>
                        <Link to = {`/detail/${products._id}`} className='text-decoration-none text-dark '><Card.Title className="NA-card-title mt-md-0 mb-md-0 mt-lg-3 mb-lg-2">{name}</Card.Title></Link>
                        <Link to = {`/detail/${products._id}`} className='text-decoration-none text-dark' ><Card.Text className="NA-card-text mb-lg-3" >{fragrance_type} <span>{weight}</span></Card.Text></Link>
                        <Link to = {`/detail/${products._id}`}className='text-decoration-none text-dark'><Card.Text className="NA-card-price mb-lg-4"><span>₦</span>{price}</Card.Text></Link>
                        {isavailability ? <Button variant="dark" className='text-light p-md-1 p-lg-2 NA-card-btn'>Add to Cart</Button> : <Button variant="secondary" className='text-light p-2 NA-card-btn'>Sold Out</Button>}
                    </Card.Body>
                </Card>
            </div>
            {/* // async function is used because it is waiting for a Promise
            // use async to await something that may not be ready  */}
        </div>

    )
}

export default ProductCard