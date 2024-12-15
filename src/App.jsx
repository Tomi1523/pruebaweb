import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cuadrados from "./componentes/cuadrados";
import Home from "./componentes/Home";
import Layout from "./componentes/layout";
import { useState } from "react";
import jugadoresData from './data/jugadores.json';


function App() {

  const [jugadores, setJugadores] = useState(jugadoresData);

  //sm ≥576px; 	md	≥768px; lg	≥992px; xl	≥1200px

  return (
    <>
     <BrowserRouter>
     <Layout></Layout>
     <Routes>
     <Route path="/" element={<Home jugadores={jugadores} setJugadores={setJugadores} />} />
     <Route path="/cuadrados" element={<Cuadrados jugadores={jugadores} />} />
     
        
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
