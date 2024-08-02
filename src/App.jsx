import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MintPage from "./pages/MintPage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="mint" element={<MintPage/>}/>
        </Routes>
        
      </Router>
    </>
  );
};

export default App;
