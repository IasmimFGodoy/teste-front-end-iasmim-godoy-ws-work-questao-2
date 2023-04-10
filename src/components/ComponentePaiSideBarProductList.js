import React from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

const ComponentePaiSideBarProductList = () => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <ProductList />
        </div>
    );
};

export default ComponentePaiSideBarProductList;