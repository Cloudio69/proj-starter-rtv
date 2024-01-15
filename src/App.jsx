import "./App.css";
import { Route, Routes } from "react-router";

import { Home } from "./routes";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
}

export default App;
