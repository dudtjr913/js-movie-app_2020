import React from "react";
import About from "./routes/about";
import Home from "./routes/home";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./routes/navigation";
import Detail from "./components/detail";
import "./app.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
