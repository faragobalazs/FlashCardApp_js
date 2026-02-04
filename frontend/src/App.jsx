import "./App.css";
import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";
import Cards from "../pages/FlashCardPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 min-h-0 flex flex-col overflow-auto">
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
