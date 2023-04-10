import React from "react";
import '../styles/Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li className="item" id="currentItem">Products</li>
                <li className="item">Company profile</li>
                <li className="item">Logout</li>
            </ul>
        </div>
    );
}

export default Sidebar;