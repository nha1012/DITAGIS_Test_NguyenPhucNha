import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Detail from './component/Detail'
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Route path="/" exact component={ProductList} />
        <Route path="/product/*_:id" component={Detail} />
    </div>
  );
}

export default App;
