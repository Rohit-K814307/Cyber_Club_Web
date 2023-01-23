import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Navbar, Projects, Team, Contact } from "./components";

function App() {
  return (
    <div className="app">
      <Router className="frosted">
        
        <Routes className="stuff">

          <Route path="/" element={<About/>}>
          </Route>
          
          <Route path = "ml" element = {<About/>}>
            <Route path="*" element={<h1 className="container">Page Doesn't Exist!</h1>} />
          </Route>
          <Route path = "ml/projects" element = {<Projects />} />
          <Route path = "ml/team" element = {<Team />} />
          <Route path = "ml/contact" element = {<Contact />} />

          <Route path = "aws" element={<About/>}>
            <Route path="*" element={<h1 className="container">Page Doesn't Exist!</h1>} />
          </Route>
          <Route path = "aws/projects" element = {<Projects />} />
          <Route path = "aws/team" element = {<Team />} />
          <Route path = "aws/contact" element = {<Contact />} />

          <Route path = "cybersec" element = {<About/>}>
            <Route path="*" element={<h1 className="container">Page Doesn't Exist!</h1>} />
          </Route>
          <Route path = "cybersec/projects" element = {<Projects />} />
          <Route path = "cybersec/team" element = {<Team />} />
          <Route path = "cybersec/contact" element = {<Contact />} />

          <Route path="*" element={<h1 className="container">Page Doesn't Exist!</h1>} />
        </Routes>
      </Router>
      <div className="blob"></div>
      <Navbar />
    </div>
  );
}

export default App;
