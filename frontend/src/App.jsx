import "./App.css";
import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";
import Cards from "../pages/FlashCardPage";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
