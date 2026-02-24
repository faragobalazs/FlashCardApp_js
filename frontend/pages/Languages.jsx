import { useState, useEffect } from "react";
import "../src/index.css";
import "../src/App.css";

const API_BASE = "http://localhost:4000";

export default function Languages() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/languages`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLanguages(data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col flex-1 justify-center dark:bg-gray-600">
        <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800 h-15 text-xl text-gray-400 shrink-0">
          <p>Languages</p>
        </div>

        <ul className="flex flex-row flex-1 justify-center">
          {languages.map((lang) => (
            <li
              key={lang._id}
              className="flex flex-col justify-center border-5 border-gray-100 dark:border-gray-800 m-10 text-gray-950 dark:text-gray-100 text-3xl"
            >
              <div className="h-full border-20 border-gray-50 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-500">
                <div className="flex flex-col m-10">
                  <div className="text-center">{lang.name}</div>
                  <div className="flex flex-row text-lg">
                    <button className="p-2 text-gray-400 hover:text-blue-500">
                      edit
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500">
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full h-20 text-3xl text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700">
        add
      </button>
    </>
  );
}
