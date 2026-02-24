import { useState, useEffect } from "react";
import "../src/index.css";
import "../src/App.css";

const API_BASE = "http://localhost:4000";

export default function Flashcards() {
  const [languages, setLanguages] = useState([]);
  const [selectedLangId, setSelectedLangId] = useState("");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/languages`)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setLanguages(data);
      });
  }, []);

  useEffect(() => {
    if (!selectedLangId) {
      setCards([]);
      return;
    }
    setLoading(true);
    fetch(`${API_BASE}/api/languages/${selectedLangId}`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data.word || []);
      })
      .finally(() => setLoading(false));
  }, [selectedLangId]);

  const selectedLang = languages.find((l) => l._id === selectedLangId);

  return (
    
  );
}
