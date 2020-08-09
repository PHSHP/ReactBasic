import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
// import KakaoMap from "./components/KakaoMap";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      {/* <Route path="/kakao" exact={true} component={KakaoMap} />
      <KakaoMap /> */}
    </HashRouter>
  );
}

export default App;
