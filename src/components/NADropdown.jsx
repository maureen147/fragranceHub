import React from 'react'
import "../css/Newarrival.css"
// import Dropdown from 'react-bootstrap/Dropdown';

function Mydropdown1() {
    return (
        <div>
            <form>
                <label className="me-2"><b>Sort By</b></label>
                <select name="cars" id="cars">
                    <option value="New Arrival">New Arrival</option>
                    <option value="Best Seller">Best Seller</option>
                    <option value="Best Seller">Featured</option>
                    <option value="Best Seller">Alphabetically, A-Z</option>
                    <option value="Best Seller">Alphabetically, Z-A</option>
                    <option value="Best Seller">Price, Low to High</option>
                    <option value="Best Seller">Price, High to Low</option>
                    <option value="Best Seller">Date, Old to New</option>
                    <option value="Best Seller">Date, New to Old</option>
                </select>
            </form>
        </div>

    );
}
export default Mydropdown1;

export function Mydropdown2() {
    return (
        <div className='select-wrapper'>
            <select name="cars" id="cars"  >
                <option value="New Arrival">New Arrival</option>
                <option value="Best Seller">Best Seller</option>
                <option value="Best Seller">Featured</option>
                <option value="Best Seller">Alphabetically, A-Z</option>
                <option value="Best Seller">Alphabetically, Z-A</option>
                <option value="Best Seller">Price, Low to High</option>
                <option value="Best Seller">Price, High to Low</option>
                <option value="Best Seller">Date, Old to New</option>
                <option value="Best Seller">Date, New to Old</option>
            </select>
        </div>

    );
}



