import { useState } from "react";
import "../src/index.css";
import "../src/App.css";
import "primeicons/primeicons.css";

export default function NavBar() {
  const [themeButton, setThemeButton] = useState(true);
  return (
    <>
      <div className="flex flex-wrap flex-row sm:flex-row items-center gap-2 bg-gray-200">
        <h1 className="m-2 text-4xl text-gray-500 sm:text-center">
          Flashcards
        </h1>
        <div className="flex justify-center">
          <button
            className="pi pi-language m-3 text-gray-400 hover:text-gray-600 active:text-white"
            style={{ fontSize: "1.5rem" }}
            title="Languages"
          ></button>
          <button
            className="pi pi-clone m-3 text-gray-400 hover:text-gray-600 active:text-white"
            style={{ fontSize: "1.5rem" }}
            title="Learning"
          ></button>
          <button
            className="pi pi-database m-3 text-gray-400 hover:text-gray-600 active:text-white"
            style={{ fontSize: "1.5rem" }}
            title="Flashcards"
          ></button>
          <button
            className="pi pi-chart-line m-3 text-gray-400 hover:text-gray-600 active:text-white"
            style={{ fontSize: "1.5rem" }}
            title="Stats"
          ></button>
          <div>
            {themeButton ? (
              <button
                onClick={() => setThemeButton(false)}
                className="pi pi-moon m-3 text-gray-400 hover:text-gray-600 active:text-white"
                style={{ fontSize: "1.5rem" }}
                title="Dark Theme"
              ></button>
            ) : (
              <button
                onClick={() => setThemeButton(true)}
                className="pi pi-sun m-3 text-gray-400 hover:text-gray-600 active:text-white"
                style={{ fontSize: "1.5rem" }}
                title="Light Theme"
              ></button>
            )}
          </div>

          <button
            className="pi pi-user m-3 text-gray-400 hover:text-gray-600 active:text-white"
            style={{ fontSize: "1.5rem" }}
            title="Sign In"
          ></button>
        </div>
      </div>
    </>
  );
}
