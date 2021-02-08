import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "styles/index.scss";
import Routes from "routes";

function Index() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default Index;
