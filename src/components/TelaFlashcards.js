import React, { useState } from "react";

import LogoSmll from "../assets/img/logo-pequeno.png";

import FlashCard from "./FlashCard";
import Questions from "./Questions";
import Footer from "./Footer";

export default function TelaFlashcards({ Q }) {
  const [card, setCard] = useState(<FlashCard Q={Q} />);
  return (
    <>
      <div className="flashcardSrc flex">
        <div className="flshtop flex">
          <img src={LogoSmll} alt="logo"></img>
          <h2 className="righteous">ZapRecall</h2>
        </div>
        <div className="deck">{card}</div>
        <Footer qtdPerguntas={Questions.length} />
      </div>
    </>
  );
}
