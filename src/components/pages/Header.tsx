import React from "react";
import NavigationBar from "../button/NavigationBar";
import "./Header.css";

const Header = () => {
    return (
        <>
            <div className="header">
                <header>
                    <h1 className={"h1"}>CinemaTech</h1>
                    <h2 className={"h2Header"}>React app by Noam Meir</h2>
                    <NavigationBar/>
                </header>
            </div>
        </>
    )
};
export default Header;