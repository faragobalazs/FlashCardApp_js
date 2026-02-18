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
    <div>
      <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800 h-15 text-xl text-gray-400 shrink-0">
        <p>Languages</p>
      </div>
      <ul>
        {languages.map((lang) => (
          <li key={lang._id}>{lang.name}</li>
        ))}
      </ul>
    </div>
  );
}
