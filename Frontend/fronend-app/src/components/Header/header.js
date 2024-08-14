import React from "react";
import "./header.css";

export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="brand">
                    <span style={{ color: "black" }}>Job</span>
                    <span style={{ color: "red" }}>Potel</span>
                </div>
                <div className="header-menus">
                    <ul className="header-menus">
                        <li className="list-item">Home</li>
                        <li className="list-item">Jobs</li>
                        <li className="list-item">Browse</li>
                    </ul>
                    <div>
                        <ul className="login-logout">
                            <li className="list-item">Login</li>
                            <li className="list-item">Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
