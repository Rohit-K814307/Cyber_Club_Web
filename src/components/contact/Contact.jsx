import React from "react";
import "./contact.css";
import { Card } from "../card/Card";
import { contact_home, contact_ml, contact_cybersec, contact_aws } from "../constants";

export function Contact() {
    
    if (window.location.pathname.includes('cybersec')) {
        console.log("cybersec");

        return (
            <div className="wrapper container">
                {contact_cybersec.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );
    } else if (window.location.pathname.includes('ml')) {
        console.log("ml");
        return (
            <div className="wrapper container">
                {contact_ml.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );

        
    } else if (window.location.pathname.includes('aws')) {
        console.log("aws");
        return (
            <div className="wrapper container">
                {contact_aws.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );


    } else {
        console.log("home/cyberoverall");
        return (
            <div className="wrapper container">
                {contact_home.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );
    }
}