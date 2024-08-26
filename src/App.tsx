import Home from "./components/Home.tsx";
import Settings from "./components/Settings.tsx";
import List from "./components/List.tsx";
import Navbar from "./components/Navbar.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { Routes, Route } from "react-router-dom";
import { Download } from "./components/Download.tsx";
function App() {
   
  return (
    <>

      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<p>/</p>} />
        <Route path="/List" element={<List />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/Settings" element={<Settings />} />

      </Routes> 
    </>
  );
}

export default App;
