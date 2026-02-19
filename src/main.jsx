import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/Navbar.css";
import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Admissions.css";
import "./styles/Contact.css";
import "./styles/Course.css";
import "./styles/Faculty.css";
import "./styles/Gallery.css";
import "./styles/Placements.css";
import "./styles/Footer.css";
import "./styles/global animation.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
