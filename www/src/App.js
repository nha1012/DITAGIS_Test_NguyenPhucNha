import React , { useEffect}from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Detail from './component/Detail'
import { Route } from "react-router-dom";
import {useSelector} from 'react-redux'
function App() {
  const state = useSelector(state=>state)
  useEffect(()=>{
  },[state])
  return (
    <div className="App">
        <Navbar />
        <Route path="/" exact component={ProductList} />
        <Route path="/product/*_:id" exact component={Detail} />
    </div>
  );
}

export default App;
