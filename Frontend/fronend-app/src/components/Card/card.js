import React from "react";
import "./card.css";

export default function Card() {
    return (
        <div className="card">
            <div className="card-heading">
                <p className="job-created-day">1 days ago</p>
                <p>img</p>
            </div>
            <div className="company-logo">
                <p style={{ border: "1px solid rgb(234, 231, 231)" }}>logo</p>
                <div className="company-details">
                    <p className="company-name">Google</p>
                    <p className="country">India</p>
                </div>
            </div>
            <h1 className="job-postion">Frontend Developer</h1>
            <p className="job-description">
                I need developer eact is the library for web and native user int Build user interfaces out of individual pieces called components
            </p>
            <div className="card-details">
                <p className="p1-card-details">12 postions</p>
                <p className="p1-card-details">Full Time</p>
                <p className="p1-card-details">14LPA</p>
            </div>
            <div className="card-button">
                <button className="btn1">Details</button>
                <button className="btn2">Save For Later</button>
            </div>
        </div>
    );
}
