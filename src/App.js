import React from "react";
import { portfolioProjects } from "./data";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <Projects portfolioProjects={portfolioProjects} />
      <Footer />
    </div>
  );
}

export default App;
