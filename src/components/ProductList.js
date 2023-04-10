import React from "react";
import '../styles/ProductList.css'
function ProductList() {
    return (
        <div className="product-list-container">
            <div className="new-product">
                <h2>List of products</h2>
                <button href="/" className="new-product-btn">+ New</button>
            </div>
            <div className="menu-container">
                <div className="products">
                    <ul>
                        <li>Red Apple</li>
                        <li>Green Salad</li>
                        <li>Water Jar</li>
                        <li>Natural Supplement 1</li>
                        <li>Natural Supplement 2</li>
                        <li>Banana's Juice</li>
                        <li>Natural Orange Juice</li>
                    </ul>
                </div>
                <div className="price">
                    <ul>
                            <li>$ 1.99</li>
                            <li>$ 4.66</li>
                            <li>$ 3.66</li>
                            <li>$ 7.86</li>
                            <li>$ 5.00</li>
                            <li>$ 4.77</li>
                            <li>$ 3.21</li>
                    </ul>
                </div>
                <div className="edit-or-delete">
                <ul>
                            <li><button className="edit-btn">Edit</button> <button className="delete-btn">X</button></li>
                            <li><button className="edit-btn">Edit</button> <button className="delete-btn">X</button></li>
                            <li><button className="edit-btn">Edit</button> <button className="delete-btn">X</button></li>
                            <li><button className="edit-btn">Edit</button> <button className="delete-btn">X</button></li>
                            <li><button className="edit-btn">Edit</button> <button className="delete-btn">X</button></li>
                            <li><button className="edit-btn">Edit</button> <button className="delete-btn">X</button></li>
                            <li><button className="edit-btn">Edit</button> <button className="delete-btn">X</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ProductList;