import "./App.css";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Home />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
