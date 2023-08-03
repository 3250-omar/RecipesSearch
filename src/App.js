import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Route,  Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import { Settings } from "./pages/Settings";
function App() {
  return (
    <div className="App">
          <Navbar />
        <div className="container main">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
      </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
