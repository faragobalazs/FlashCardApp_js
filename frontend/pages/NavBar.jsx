import "../src/index.css";
import "primeicons/primeicons.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <h1 className="h1-class">Flashcards</h1>
      <button
        className="pi pi-language btn"
        style={{ fontSize: "1.5rem" }}
        title="Languages"
      ></button>
      <button
        className="pi pi-clone btn"
        style={{ fontSize: "1.5rem" }}
        title="Learning"
      ></button>
      <button
        className="pi pi-database btn"
        style={{ fontSize: "1.5rem" }}
        title="Flashcards"
      ></button>
      <button
        className="pi pi-chart-line btn"
        style={{ fontSize: "1.5rem" }}
        title="Stats"
      ></button>
      <button
        className="pi pi-moon btn"
        style={{ fontSize: "1.5rem" }}
        title="Dark Theme"
      ></button>
      <button
        className="pi pi-user btn"
        style={{ fontSize: "1.5rem" }}
        title="Sign In"
      ></button>
    </div>
  );
}
