import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Footer } from "./components/Footer/Footer";

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About/>} />
         </Routes>
         <Footer/>
      </>
   );
}

export default App;
