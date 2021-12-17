import Nav from "./components/Nav"
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import InfoTicket from "./pages/Infoticket";
import BeliTicket from "./pages/Beliticket";
import ModernCamp from "./pages/Moderncamp";
import FamilyCamp from "./pages/Familycamp";
import DinoShow from "./pages/Dinoshow";
import WisataVirtual from "./pages/Wisatavirtual";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="infoticket" element={<InfoTicket />} />
        <Route path="beliticket" element={<BeliTicket />} />
        <Route path="moderncamp" element={<ModernCamp />} />
        <Route path="familycamp" element={<FamilyCamp />} />
        <Route path="dinoshow" element={<DinoShow />} />
        <Route path="wisatavirtual" element={<WisataVirtual />} />
      </Routes>
    </>
  )
}

export default App
