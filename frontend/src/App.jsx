import { Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";

import Languages from "../pages/Languages";
import Learning from "../pages/Learning";
import Flashcards from "../pages/Flashcards";
import Stats from "../pages/Stats";
import LogIn from "../pages/LogIn";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 min-h-0 flex flex-col overflow-auto dark:bg-gray-600">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
