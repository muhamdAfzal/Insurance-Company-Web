import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Overlay from "./components/Overlay";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggle = (e) => {
    setModalOpen(!modalOpen);
    e.preventDefault();
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOpen) handleToggle(e);
  });

  return (
    <div className="relative z-0">
      <Navbar onToggle={handleToggle} />
      <Home onToggle={handleToggle} />
      <Footer onToggle={handleToggle} />
      {modalOpen && <Overlay onToggle={handleToggle} />}
      {modalOpen && <Modal onToggle={handleToggle} />}
    </div>
  );
}

export default App;
