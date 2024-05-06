import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviewer from "./Reviewer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/rib-reviews/:soho" element={<Reviewer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
