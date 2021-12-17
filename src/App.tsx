import Nav from "./components/Nav"
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import InfoTicket from "./pages/Infoticket";
import BeliTicket from "./pages/Beliticket";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="infoticket" element={<InfoTicket />} />
        <Route path="beliticket" element={<BeliTicket />} />
      </Routes>
    </>
  )
}

export default App
