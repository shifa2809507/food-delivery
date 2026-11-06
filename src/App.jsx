import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Placeorder from "./pages/Placeorder";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StoreContextProvider from "./components/StoredContext";
import Footer from "./components/Footer";
import { useState } from "react";
import Loginpopup from "./components/Loginpopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin && <Loginpopup setShowLogin={setShowLogin} />}
      <Router basename={import.meta.env.BASE_URL}>
        <StoreContextProvider>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Placeorder />} />
            <Route path="/contact us" element={<Contact />} />
          </Routes>
          <Footer />
        </StoreContextProvider>
      </Router>
    </>
  );
};

export default App;