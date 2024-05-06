import React from "react";
import { Routes, Route } from "react-router-dom";
import Reviewer from "./Reviewer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Reviewer />} />
      </Routes>
    </div>
  );
}

export default App;
