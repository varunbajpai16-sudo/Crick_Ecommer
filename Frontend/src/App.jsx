import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CricketBat from "./pages/Cricket_Bat";
import CricketBalls from "./pages/Cricket_Ball"
import BattingGears   from "./pages/BattingGears";
import Protection from "./pages/Protection"; 
import Accessories from "./pages/Accessories";
import Clothing from "./pages/Clothing";
import NewArrivals from "./pages/NewArrivals";
export default function App() {
 return (
  <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cricket-bats" element={<CricketBat />} />
    <Route path="/cricket-balls" element={<CricketBalls />} />
    <Route path="/batting-gears" element={<BattingGears />} />
    <Route path="/protection" element={<Protection />} />
    <Route path="/accessories" element={<Accessories />} />
    <Route path="/clothing" element={<Clothing />} />
    <Route path="/new-arrivals" element={<NewArrivals />} />
    </Routes>
  </>
 )
}