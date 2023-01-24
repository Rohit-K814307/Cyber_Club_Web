import React from "react";
import "./team.css";
import { Card } from "../card/Card";
import { team_home, team_ml, team_cybersec, team_aws } from "../constants";

export function Team() {
    
    if (window.location.pathname.includes('cybersec')) {
        console.log("cybersec");

        return (
            <div className="wrapper container">
                {team_cybersec.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );
    } else if (window.location.pathname.includes('ml')) {
        console.log("ml");
        return (
            <div className="wrapper container">
                {team_ml.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );

        
    } else if (window.location.pathname.includes('aws')) {
        console.log("aws");
        return (
            <div className="wrapper container aw">
                {team_aws.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );


    } else {
        console.log("home/cyberoverall");
        return (
            <div className="wrapper container">
                {team_home.map((obj) => <Card img={obj.img} title={obj.title} content={obj.content} />)}
            </div>
        );
    }
}