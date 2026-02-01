import "./App.css";
import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <p>Hello!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
