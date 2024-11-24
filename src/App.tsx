import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import { Write } from "./pages/write";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="write" element={<Write />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
