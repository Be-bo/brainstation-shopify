import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Partnerships from "./components/Partnerships";
import AddPartnership from "./components/AddPartnerships";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Partnerships />}></Route>
          <Route path="/add-partnership" element={<AddPartnership />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
