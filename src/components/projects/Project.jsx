import React from "react";
import "./project.css";
import { Card } from "../card/Card";
import { projects_home, projects_ml, projects_cybersec, projects_aws } from "../constants";

export function Projects() {
    
    if (window.location.pathname.includes('cybersec')) {
        console.log("cybersec");

        return (
            <div className="wrapper container">
                {projects_cybersec.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );
    } else if (window.location.pathname.includes('ml')) {
        console.log("ml");
        return (
            <div className="wrapper container">
                {projects_ml.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );

        
    } else if (window.location.pathname.includes('aws')) {
        console.log("aws");
        return (
            <div className="wrapper container">
                {projects_aws.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );


    } else {
        console.log("home/cyberoverall");
        return (
            <div className="wrapper container">
                {projects_home.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );
    }
}