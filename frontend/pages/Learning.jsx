import { useState } from "react";
import "../src/index.css";
import "../src/App.css";

export default function Learning() {
  const [showFlip, setShowFlip] = useState(true);
  const [showSolution, setShowSolution] = useState(true);
  return (
    <div className="flex flex-col flex-1 min-h-0 w-full">
      <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800 h-15 text-xl text-gray-400 shrink-0">
        <p>Deutsch</p>
      </div>

      <div className="flex flex-col flex-1 text-3xl text-center justify-center items-center dark:bg-gray-600 dark:text-gray-200">
        tree, trees
      </div>

      <div className="flex items-center bg-gray-50 dark:bg-gray-700 h-3 shrink-0"></div>

      <div className="bg-gray-100 dark:bg-gray-800 h-1 shrink-0"></div>

      <div className="flex items-center bg-gray-50 dark:bg-gray-700 h-3 shrink-0"></div>

      <div className="flex flex-col flex-1 text-3xl text-center justify-center items-center dark:bg-gray-600 dark:text-gray-200">
        {showSolution ? "?" : "der baum, die Bäume"}
      </div>
      <div className="flex w-full justify-center">
        {showFlip ? (
          <button
            onClick={() => {
              setShowFlip(false);
              setShowSolution(false);
            }}
            className="w-full h-20 text-3xl text-gray-400 bg-gray-100 dark:bg-gray-800 border-0.5 border-gray shrink-0"
          >
            Flip
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setShowFlip(true);
                setShowSolution(true);
              }}
              className="w-1/2 h-20 text-3xl text-gray-500 bg-red-100 dark:bg-amber-900 dark:text-gray-100 border-0.5 border-gray shrink-0"
            >
              Fail
            </button>
            <button
              onClick={() => {
                setShowFlip(true);
                setShowSolution(true);
              }}
              className="w-1/2 h-20 text-3xl text-gray-500 bg-green-100 dark:bg-teal-900 dark:text-gray-100 border-0.5 border-gray shrink-0"
            >
              Pass
            </button>
          </>
        )}
      </div>
    </div>
  );
}
