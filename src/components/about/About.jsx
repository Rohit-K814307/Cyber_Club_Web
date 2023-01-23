import React from "react";
import { about_home, about_ml, about_cybersec, about_aws } from "../constants";
import "./about.css";
import { Projects, Team, Contact } from "../index";




export function About() {

    if (window.location.pathname.includes('cybersec')) {
        console.log("cybersec");
        return (
            <div className="abt container">
                <div className="info">
                    <h1 id="abtHead" className="abt head">{about_cybersec.title}</h1>
                    <p id="abtCont" className="abt cont" >{about_cybersec.content}</p>
                </div>
            </div>
        );
        
    } else if (window.location.pathname.includes('ml')) {
        console.log("ml");
        return (
            <div className="abt container">
                <div className="info">
                    <h1 id="abtHead" className="abt head">{about_ml.title}</h1>
                    <p id="abtCont" className="abt cont" >{about_ml.content}</p>
                </div>
            </div>
        );
        
        
    } else if (window.location.pathname.includes('aws')) {
        console.log("aws");
        return (
            <div className="abt container">
                <div className="info">
                    <h1 id="abtHead" className="abt head">{about_aws.title}</h1>
                    <p id="abtCont" className="abt cont" >{about_aws.content}</p>
                </div>
            </div>
        );

    } else {
        //add all info to one page rather than across all the pages for overall - its just with contact/team
        console.log("home/cyberoverall");
        return (
            <div className="home">
                <div className="blob"></div>
                <div className="abt container">
                    <div className="info abt">
                        <h1 id="abtHead" className="abt head">{about_home.title}</h1>
                        <p id="abtCont" className="abt cont" >{about_home.content}</p>
                    </div>
                </div>
                <h1 className="heading one">Club Projects!</h1>
                <div className="compo"> <Projects /> </div>

                <h1 className="heading">The Cyber Club Officers</h1>
                <div className="compo"> <Team /> </div>

                <h1 className="heading">Contact Cyber Club</h1>
                <div className="compo"> <Contact /> </div>
            </div>
        );
    }
}