import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./../Project/Homepage";
import Popularcities from "./../Project/Popularcities";
import LondonPage from "./../Project/Pages/London";
import Citypage from "./../Project/Pages/Citypage";
import Universitypage from "./../Project/Pages/Universitypage";
import Thousands from "./../Project/Thousands";
import Navbar2 from "./Navbar2";
import Layout from "./Layout";
import London from "./Cities/London";
import Shortlist from "./Shortlist";
import Viewcard from "./Viewcard";
function App() {
  return (
    <>
          <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/popularcities" element={<Popularcities />} />
        <Route path="/cities/London" element={<London />} />
        <Route path="/city/:London" element={<Citypage/>} />
        <Route path="/university/:universityName" element={<Universitypage />} />
        <Route path="/shortlist" element={<Shortlist />} />
        <Route path="/viewcard" element={<Viewcard />} />

      </Routes>
    </>
  );
}

export default App;
