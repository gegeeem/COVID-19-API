import "./App.css";
import CovidStats from "./components/pages/CovidStats/CovidStats";
import { Route, Routes } from "react-router-dom";
import Homepage from "../src/components/pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import CountryCovidStats from "./components/pages/CountryCovidStats/CountryCovidStats";
function App() {
  return (
    <div>
      <NavBar />
      <main style={{ minHeight: "80vh", backgroundColor: "white" }}>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          {/* <Route path={"/stats"} element={<CovidStats />} /> */}
          <Route path={"/country-stats"} element={<CountryCovidStats />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
