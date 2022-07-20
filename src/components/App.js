import "../assets/styles/reset.css";
import "../assets/styles/style.css";
import { useState } from "react";
import React from "react";
import Init from "./Init";
import TelaFlashcards from "./TelaFlashcards";

function App() {
  const [tela, setTela] = useState("init");
  return (
    <>{tela === "init" ? <Init setTela={setTela} /> : <TelaFlashcards />}</>
  );
}

export default App;
