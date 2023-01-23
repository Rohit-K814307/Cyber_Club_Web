import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Navbar, Projects, Team, Contact } from "./components";

function App() {
  return (
    <div className="app">
      <Router className="frosted">
        
        <Routes className="stuff">

          <Route exact path="/Cyber_Club_Web" element={<About/>}>
          </Route>
          
          <Route path = "/Cyber_Club_Web/ml" element = {<About/>}>
            <Route path="*" element={<h1 className="container">Page Doesn't Exist!</h1>} />
          </Route>
          <Route path = "/Cyber_Club_Web/ml/projects" element = {<Projects />} />
          <Route path = "/Cyber_Club_Web/ml/team" element = {<Team />} />
          <Route path = "/Cyber_Club_Web/ml/contact" element = {<Contact />} />

          <Route path = "/Cyber_Club_Web/aws" element={<About/>}>
            <Route path="*" element={<h1 className="container">Page Doesn't Exist!</h1>} />
          </Route>
          <Route path = "/Cyber_Club_Web/aws/projects" element = {<Projects />} />
          <Route path = "/Cyber_Club_Web/aws/team" element = {<Team />} />
          <Route path = "/Cyber_Club_Web/aws/contact" element = {<Contact />} />

          <Route path = "/Cyber_Club_Web/cybersec" element = {<About/>}>
            <Route path="*" element={<h1 className="container">Page Doesn't Exist!</h1>} />
          </Route>
          <Route path = "/Cyber_Club_Web/cybersec/projects" element = {<Projects />} />
          <Route path = "/Cyber_Club_Web/cybersec/team" element = {<Team />} />
          <Route path = "/Cyber_Club_Web/cybersec/contact" element = {<Contact />} />

          <Route path="*" element={<h1 className="container">Page Doesn't Exist!</h1>} />
        </Routes>
      </Router>
      <div className="blob"></div>
      <Navbar />
    </div>
  );
}

export default App;
