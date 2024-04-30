import React from 'react';
import Profilepics from '../assets/images/Ellipse 1.png'
import BlogImg from '../assets/images/image 30.png'
import BlogImg1 from '../assets/images/image 27.png'
import '../css/Blog.css'
import { Link } from 'react-router-dom';

const BlogCard = ({ product }) => {
    return(
        <div className="blogs ">
            <h1 className='blog-head'>Blogs</h1>
            <div className="blog-display">
            <div className="blog-card">
                <div className="blog-img">
                    <img src={BlogImg} alt="" style={{width:"100%", borderRadius: "10px 10px 0 0"}}/>
                </div>
                <div className="blog-details p-4">
                    <div className='blog-id d-flex gap-4'>
                        <div className="">
                            <img src={Profilepics} alt="" />
                        </div>
                        <div className="">
                            <h4>Gift Joseph</h4>
                            <p>November 9, 2023</p>
                        </div>
                    </div>
                    <div className='blog-info'>
                        <h3>Exploring The History Of Perfumes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Iaculis ultrices molestie pellentesque sed amet amet   molestie pellentesque sed amet amet lorem i... </p>
                        <Link to={'/blog'} style={{ textDecoration: "none", color: "black" }}><b>Read More...</b></Link>
                    </div>
                </div>
            </div>
            <div className="blog-card">
                <div className="blog-img">
                    <img src={BlogImg1} alt="" style={{width:"100%", borderRadius: "10px 10px 0 0"}}/>
                </div>
                <div className="blog-details p-4">
                    <div className='blog-id d-flex gap-4'>
                        <div className="">
                            <img src={Profilepics} alt="" />
                        </div>
                        <div className="">
                            <h4>Gift Joseph</h4>
                            <p>November 9, 2023</p>
                        </div>
                    </div>
                    <div className='blog-info'>
                        <h3>Exploring The History Of Perfumes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Iaculis ultrices molestie pellentesque sed amet amet   molestie pellentesque sed amet amet lorem i... </p>
                        <Link to={'/blog'} style={{ textDecoration: "none", color: "black" }}><b>Read More...</b></Link>
                    </div>
                </div>
            </div>
            <div className="blog-card">
                <div className="blog-img">
                    <img src={BlogImg} alt="" style={{width:"100%", borderRadius: "10px 10px 0 0"}}/>
                </div>
                <div className="blog-details p-4">
                    <div className='blog-id d-flex gap-4'>
                        <div className="">
                            <img src={Profilepics} alt="" />
                        </div>
                        <div className="">
                            <h4>Gift Joseph</h4>
                            <p>November 9, 2023</p>
                        </div>
                    </div>
                    <div className='blog-info'>
                        <h3>Exploring The History Of Perfumes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Iaculis ultrices molestie pellentesque sed amet amet   molestie pellentesque sed amet amet lorem i... </p>
                        <Link to={'/blog'} style={{ textDecoration: "none", color: "black" }}><b>Read More...</b></Link>
                    </div>
                </div>
            </div>
            <div className="blog-card d-lg-none ">
                <div className="blog-img">
                    <img src={BlogImg1} alt="" style={{width:"100%", borderRadius: "10px 10px 0 0"}}/>
                </div>
                <div className="blog-details p-4">
                    <div className='blog-id d-flex gap-4'>
                        <div className="">
                            <img src={Profilepics} alt="" />
                        </div>
                        <div className="">
                            <h4>Gift Joseph</h4>
                            <p>November 9, 2023</p>
                        </div>
                    </div>
                    <div className='blog-info'>
                        <h3>Exploring The History Of Perfumes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Iaculis ultrices molestie pellentesque sed amet amet   molestie pellentesque sed amet amet lorem i... </p>
                        <Link to={'/blog'} style={{ textDecoration: "none", color: "black" }}><b>Read More...</b></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default BlogCard