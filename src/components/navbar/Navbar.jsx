import "./navbar.css";
import React from "react";

export class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: false
      };
    }
    
    openNav() {
      document.getElementById("sidebar").style.width = "250px";
    }
  
    closeNav() {
      document.getElementById("sidebar").style.width = "0";
    }
  
    render() {
      return (
        <div>
          <div id="sidebar" className="sidebar">
            <div className="lks">
              <a href="#" onClick={this.closeNav}>
                X
              </a>
              <a href= {window.location.origin + "/" + window.location.pathname.split("/")[1]}>About</a>
              {window.location.pathname !=="/" &&
                <div> 
                  <a href={"/" + ((String(window.location.pathname.split("/")[1])).replace('/','')) + "/projects"}>Projects</a>
                  <a href={"/" + ((String(window.location.pathname.split("/")[1])).replace('/','')) + "/team"}>Team</a>
                  <a href={"/" + ((String(window.location.pathname.split("/")[1])).replace('/','')) + "/contact"}>Contact</a>
                </div>
              }
            </div>
          </div>
          <span className="spn">
            <div className="navbar">
              <a href="/">Home</a>
              <a href="/ml">| ML</a>
              <a href="/aws">| AWS</a>
              <a href="/cybersec">| Cybersecurity</a>
              <span className="open-button" onClick={this.openNav}>
                &#9776;
              </span>
            </div>
          </span>
        </div>
      );
    }
  }
  