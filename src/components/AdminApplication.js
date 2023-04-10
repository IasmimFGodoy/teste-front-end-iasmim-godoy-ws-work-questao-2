import React from "react";
import Header from './Header.js';
import ComponentePaiSideBarProductList from "./ComponentePaiSideBarProductList.js";
import '../styles/AdminApplication.css';

const AdminApplication = () => {
    return (
        <html>
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="./styles.css"></link>
        </head>
        <body>
            <div className="admin-application">
                <Header />
                <ComponentePaiSideBarProductList />
            </div>
        </body>
        </html>
    );
};
export default AdminApplication;